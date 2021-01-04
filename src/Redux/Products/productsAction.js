import { v4 as uuid} from 'uuid';
import { firestore, storage } from "../../Firebase/firebase";
import { serverTimestamp } from './../../Firebase/firebase';

export const uploadProducts = (productObject) => async () => {
  try {
    // console.log(productObject);
    //SEND FILE TO STOREAGE AND GET DOWNLOAD URL
    var imageRef = storage.child(`products/img-${uuid()}`);
    var fileListener = imageRef.put(productObject.coverPhoto); //Listener
    // fileListener.on()  ON takes 4 param(eventType, cb for file upladoing state, cb for file uploading error, cb will triger after  file upload)

    fileListener.on("state_changed", (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
    }, (error)=> {
        console.log(error)
    },
    async ()=> {
        //will triger after file completetion
        //From here we will get donwload url
        var downloadURL = await imageRef.getDownloadURL()
        console.log(downloadURL)
        productObject.coverPhoto  = downloadURL
        productObject.createdAt  = serverTimestamp
        productObject.cost  = parseFloat(productObject.cost)
        productObject.quantity  = parseInt(productObject.quantity)
        console.log(productObject)
        await firestore.collection('Products').add(productObject)
    }

    );

    //MODIFY PRODUCT OBJECT WITH COVER PHOTO URL AND CRETATED AT

    //CREATE DOC IN FIRESTORE
  } catch (error) {
    console.log(error);
  }
};
