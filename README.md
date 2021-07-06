# rn-getDeviceLanguage
A small piece of code used for getting device language on React Native. 

It would get the language of the device and check whether it is in the supported languages of your application by checking it in the constants. Upon finding it, it would set the language of the application as the device language, otherwise it would set it to English.

On fail of getting the device language, it would set the language to English as a last resort.
