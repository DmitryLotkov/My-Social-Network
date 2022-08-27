export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}
type SubscriberType = (messages: ChatMessageType[]) => void
let subscribers = [] as SubscriberType[]

let ws: WebSocket | null = null;
const closeHandler = () => {
    console.log("Close ws");
    setTimeout(createChannel, 3000);
}
let messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers.forEach(s => s(newMessages));
}

export function createChannel() {
    ws?.removeEventListener("close", closeHandler); // (проверка на "если вед сокет был, то удалим") при реконекте удаляем подписчик на старый веб сокет
    ws?.close(); // при реконекте закрываем старый веб сокет
    ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");
    ws.addEventListener("close", closeHandler);
    ws.addEventListener("message", messageHandler);
}

export const chatAPI = {
    subscribe(callback: SubscriberType){
        subscribers.push(callback);
        return () => {
            subscribers = subscribers.filter(s => s !== callback)
        }
    },
    unSubscribe(callback: SubscriberType){
        subscribers = subscribers.filter(s => s !== callback)
    },
    sendMessage(message:string){
        ws?.send(message);
    },
    start(){
        createChannel();
    },
    stop(){
        subscribers = [];
        ws?.removeEventListener("close", closeHandler);
        ws?.removeEventListener("message", messageHandler);
        ws?.close();

    }
}