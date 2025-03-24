import { LightningElement, wire } from 'lwc';
import { getRecords } from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import CONTACT_NAME_FIELD from '@salesforce/schema/Contact.Name';
export default class GetRecordsLwc extends LightningElement {
    
    outputs;
    errors;
    @wire(getRecords, {
        records: [
            {
              recordIds: ["001aj00000pbDk6AAE", "001aj00000pbDk7AAE"],
              fields: [ACCOUNT_NAME_FIELD],
            }, 
            {
                recordIds: ["003aj00000EayqQAAR"],
                fields: [CONTACT_NAME_FIELD],
            }
        ]
    }) outputFunction({data, error}){
        if(data){
            console.log("data", data);
            this.outputs = data;
            this.errors = null;
        }else if(error){
            console.log("error", error);
            this.errors = error;
            this.outputs = null;
        }
    }
}