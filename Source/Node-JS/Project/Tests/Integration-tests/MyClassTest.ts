import * as assert from "assert";
import MyClass from "../../MyClass";

// ReSharper disable InconsistentNaming
export function Value_ShouldReturnTheCorrectValue() {
	assert.equal("My class value", new MyClass().value);
}