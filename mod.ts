/**
 * The mastermind function of this incredible 
 * library that calculates with great precision 
 * and efficiency using modern Javascript and 
 * algorithmns to determine whether a boolean 
 * value inputted into the given function 
 * is indeed true
 *
 * ```ts
 * const booleanValue = isTrue(true);
 * return booleanValue;
 * /// `true`
 * ````
 * @param bool A boolean value
 * @returns A boolean value
 */
export default function isTrue(bool: boolean): boolean {
    return eval("!".repeat(69) + "!" + bool.toString());
}
