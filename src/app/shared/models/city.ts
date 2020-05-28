import { BinTarget } from './bin-target';

export class City {
    private _id: number; 
    private _name: String;
    private _citycode: String;
    private _binTarget: BinTarget [];
    
    constructor(name: String, citycode: String, binTarget: BinTarget []){
        
        this._name = name;
        this._citycode = citycode;
        this._binTarget = binTarget;
    }
    /*Getters and Setters */
    
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    
    /**
     * Getter name
     * @return {String}
     */
	public get name(): String {
		return this._name;
	}

    /**
     * Getter cityCode
     * @return {String}
     */
	public get citycode(): String {
		return this._citycode;
	}

    /**
     * Getter binTarget
     * @return {Object []}
     */
	public get binTarget(): BinTarget [] {
		return this._binTarget;
	}

    /**
     * Setter name
     * @param {String} value
     */
	public set name(value: String) {
		this._name = value;
	}

    /**
     * Setter cityCode
     * @param {String} value
     */
	public set citycode(value: String) {
		this._citycode = value;
	}

    /**
     * Setter binTarget
     * @param {Object []} value
     */
	public set binTarget(value: BinTarget []) {
		this._binTarget = value;
	}   

}

