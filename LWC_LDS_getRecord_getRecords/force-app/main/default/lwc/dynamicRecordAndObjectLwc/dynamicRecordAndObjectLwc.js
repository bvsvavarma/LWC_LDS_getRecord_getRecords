import { LightningElement, api } from 'lwc';

export default class DynamicRecordAndObjectLwc extends LightningElement {
    @api recordId;
    @api objectApiName;
}