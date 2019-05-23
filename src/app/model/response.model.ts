export interface ResponseModel {
    code: number;
    message: string;
    data: {
        pref: string;
        city: string;
        town: string;
        address: string;
        fullAddress: string;
    };
}