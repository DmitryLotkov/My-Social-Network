import {StatusType} from "../store/chatReducer";
//types
export type ChatMessageAPIType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}
type MessagesReceivedSubscriberType = (messages: ChatMessageAPIType[]) => void;
type StatusChangedSubscriberType = (status: StatusType) => void;
const subscribers = {
    "messageReceived" : [] as MessagesReceivedSubscriberType[],
    "statusChanged": [] as StatusChangedSubscriberType[]
}

export type EventNamesType = "messageReceived" | "statusChanged";

let isShowCloseAlert = true;
let ws: WebSocket | null = null;
let alertCounter = false;

const closeHandler = () => {
    console.log("Close ws");
    if(isShowCloseAlert){
        alert("Internet connection was interrupted");
        isShowCloseAlert = false
    }
    notifySubscribersAboutStatus("pending");
    setTimeout(createChannel, 3000);
    alertCounter = true;
}
let messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers["messageReceived"].forEach(s => s(newMessages));
}
let openHandler = () => {
    if(alertCounter){
        alert("Internet connection was restored")
    }
    notifySubscribersAboutStatus("ready");
}
let errorHandler = () => {
    notifySubscribersAboutStatus("error");
    console.log("Refresh page")
}
const cleanUp = () => {
    ws?.removeEventListener("close", closeHandler); // (проверка на "если вед сокет был, то удалим") при реконекте удаляем подписчик на старый веб сокет
    ws?.removeEventListener("message", messageHandler);
    ws?.removeEventListener("open", openHandler);
    ws?.removeEventListener("error", errorHandler);
}

const notifySubscribersAboutStatus = (status: StatusType) => subscribers["statusChanged"].forEach(s=>s(status));
export function createChannel() {
    cleanUp()
    ws?.close(); // при реконекте закрываем старый веб сокет
    ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");
    notifySubscribersAboutStatus("pending")
    ws.addEventListener("close", closeHandler);
    ws.addEventListener("message", messageHandler);
    ws.addEventListener("open", openHandler);
    ws.addEventListener("error", errorHandler);
}

export const chatAPI = {
    subscribe(eventName: EventNamesType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subscribers[eventName].push(callback);
        return () => {
            // @ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
        }
    },
    unSubscribe(eventName: EventNamesType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message);
    },
    start() {
        createChannel();
    },
    stop() {
        subscribers["messageReceived"] = [];
        subscribers["statusChanged"] = [];
        cleanUp();
        ws?.close();

    }
}