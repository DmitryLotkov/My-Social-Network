import * as Yup from 'yup';

export const freeUserId = 1079;
export const myUserID = 21748;
export const maxPictureSize = 10000000; // 10MB
const webSiteRegular =
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

export const DisplayingErrorMessagesSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'User name must be more than 3 symbols')
    .max(50, 'User name must be less than 50 symbols')
    .required('Required'),
  aboutMe: Yup.string()
    .min(3, 'User description text must be more than 3 symbols')
    .max(300, 'User description text must be less than 300 symbols')
    .required('Required'),
  lookingForAJobDescription: Yup.string()
    .min(3, 'Job description text must be more than 3 symbols')
    .max(300, 'Job description text must be less than 300 symbols')
    .required('Required'),
  contacts: Yup.object().shape({
    facebook: Yup.lazy(value =>
      !value
        ? Yup.string()
        : Yup.string().matches(
            /(?:https:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w]*\/)*([\w]*)/,
            'Please enter correct url',
          ),
    ),
    website: Yup.string()
      .min(0)
      .nullable()
      .matches(webSiteRegular, 'Please enter correct url'),
    vk: Yup.string().matches(
      /(?:https:\/\/)?[-a-zA-Z0-9@:%_+.~#?&=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&=]*)?/gi,
      'Please enter correct vk url',
    ),
    twitter: Yup.string()
      .min(0)
      .nullable(true)
      .matches(/@([A-Za-z0-9_]{1,15})/, 'Please enter correct twitter url'),
    instagram: Yup.string()
      .min(0)
      .nullable(true)
      .matches(
        /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/gim,
        'Please enter correct instagram url',
      ),
    youtube: Yup.string()
      .min(0)
      .nullable(true)
      .matches(
        /youtu(?:.*\/v\/|.*v\|\.be\/)([A-Za-z0-9_-]{11})/,
        'Please enter correct YouTube url',
      ),
    github: Yup.string()
      .min(0)
      .nullable(true)
      .matches(
        /(?:(?:http|https):\/\/)?(?:www.)?(?:github.com)\/(\w+)/gim,
        'Please enter correct github url',
      ),
    mainLink: Yup.string().min(0).nullable(true).url(),
  }),
});
