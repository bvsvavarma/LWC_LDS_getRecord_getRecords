import { LightningElement, api, wire } from 'lwc';
import { getFieldValue, getRecord, getFieldDisplayValue } from "lightning/uiRecordApi";
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_RATING_FIELD from '@salesforce/schema/Account.Rating';
import ACCOUNT_INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ACCOUNT_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

export default class GetRecordLwc extends LightningElement {
    @api recordId;
    accName;
    accRevenue;
    
    @wire(getRecord, {
        recordId: '$recordId',
        fields: [ACCOUNT_NAME_FIELD, ACCOUNT_RATING_FIELD, ACCOUNT_INDUSTRY_FIELD, ACCOUNT_REVENUE_FIELD]
    }) accountsFunction({data, error}){
        if(data){
            console.log(data);
            //this.accName = data.fields.Name.value;
            //this.accRevenue = data.fields.AnnualRevenue.value;
            this.accName = getFieldValue(data, ACCOUNT_NAME_FIELD);
            this.accRevenue = getFieldDisplayValue(data, ACCOUNT_REVENUE_FIELD);
        }else if(error){
            console.log(error);
            this.errors = error;
            this.recordData = null;
        }
    }
}