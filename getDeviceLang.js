import { NativeModules, Platform } from 'react-native';
import { LANGUAGES } from "../constants/Constants";

//will check the O.S. then attempt to get the default language of the app, on fail or found of unsupported language will return 'en' for English language
const getDeviceLang = () => {
    try {

        let lang = Platform.OS === 'ios'
            ? NativeModules.SettingsManager.settings.AppleLocale || //iOS
            NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
            : NativeModules.I18nManager.localeIdentifier; //Android

        lang = LANGUAGES.includes(lang.slice(0, 2))     //controls if device language is supported, if not assinging to 'en'
            ? lang.slice(0, 2)
            : 'en';

        console.log(`langcontext deviceLanguage() worked and returned: "${lang}".`);

        return lang;

    } catch (error) {

        console.log(`langcontext deviceLanguage func failed: ${error.message} \nApp language set to English`)

        return 'en'; //upon error sends 'en'
    }
}

export default getDeviceLang;
