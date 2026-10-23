LANCESOFT CABS — ANDROID APK BUILD (मोबाइल से)

महत्वपूर्ण:
यह ZIP एक starter project है, तैयार/production-tested ऐप नहीं। Firebase config सही भरने और Firebase Console में Authentication/Firestore rules सेट करने के बाद ही login/data features चलेंगे।

सबसे आसान GitHub तरीका:
1. GitHub ऐप/Chrome में अपनी LanceSoft-cabs repository खोलें। Branch main चुनें।
2. Add file > Upload files खोलें।
3. इस ZIP की फ़ाइल `LanceSoft_Cabs_Web_Android_Starter.zip` को repository ROOT में upload करें। इसे extract करने की जरूरत नहीं है। Commit changes करें।
4. इसके बाद repository में `.github/workflows/build-apk.yml` खोलें। Edit (pencil) करें, पुराना पूरा code हटाकर इसी kit में मौजूद `build-apk.yml` का पूरा code paste करें। Commit changes करें।
   अगर GitHub मोबाइल पर hidden `.github` folder तक पहुँचना कठिन हो, browser में Desktop site चालू करें।
5. Repository > Actions > Build Android APK > Run workflow > Branch main > Run workflow.
6. Build पूरा होने तक प्रतीक्षा करें। हरा check आए तो उसी run को खोलें। नीचे Artifacts में `LanceSoft-Cabs-debug-apk` दबाकर ZIP डाउनलोड करें।
7. डाउनलोड की ZIP को Files app में Extract करें। `app-debug.apk` खोलें और Install करें। Android पूछे तो केवल अपने भरोसेमंद डाउनलोड के लिए “Allow from this source” अनुमति दें। Install के बाद चाहें तो यह अनुमति बंद कर दें।

अगर build fail हो:
Actions > failed run > build job > सबसे पहले लाल X वाले step को खोलें। उस step की अंतिम 15–25 error lines का screenshot भेजें। केवल “Annotations” वाला पेज पर्याप्त नहीं है।

Firebase config:
1. `public/index.html` में `firebaseConfig` खोजें।
2. Firebase Console > Project settings > Your apps > Web app से config values कॉपी करें और placeholders बदलें।
3. ध्यान दें: Firebase web config अपने-आप admin security नहीं देता। Firestore rules और admin claim/approval ठीक से सेट किए बिना production में इस्तेमाल न करें।

सीमाएँ:
- यह debug APK है, Play Store release-signed APK नहीं।
- अभी background live tracking, private-number masking/calling, push notifications और production-grade admin approval पूरी तरह implemented/verified नहीं हैं।
- GitHub Actions build सफल होना Firebase backend को अपने-आप configure नहीं करता।
