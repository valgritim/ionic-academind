export class BinTarget {
    private _category : String;
    private _material : String;
    private _destination : String;
    private _color : String;


	constructor(category: String, material: String, destination: String, color: String) {
		this._category = category;
		this._material = material;
		this._destination = destination;
		this._color = color;
	}

    /**
     * Getter category
     * @return {String}
     */
	public get category(): String {
		return this._category;
	}

    /**
     * Getter material
     * @return {String}
     */
	public get material(): String {
		return this._material;
	}

    /**
     * Getter destination
     * @return {String}
     */
	public get destination(): String {
		return this._destination;
	}

    /**
     * Getter color
     * @return {String}
     */
	public get color(): String {
		return this._color;
	}

    /**
     * Setter category
     * @param {String} value
     */
	public set category(value: String) {
		this._category = value;
	}

    /**
     * Setter material
     * @param {String} value
     */
	public set material(value: String) {
		this._material = value;
	}

    /**
     * Setter destination
     * @param {String} value
     */
	public set destination(value: String) {
		this._destination = value;
	}

    /**
     * Setter color
     * @param {String} value
     */
	public set color(value: String) {
		this._color = value;
	}


}

