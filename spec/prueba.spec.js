describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
});

describe("Operaciones matemáticas", function () {
  it("Debe sumar correctamente dos números", function () {
    expect(3 + 5).toBe(8);
  });

  it("Debe restar correctamente dos números", function () {
    expect(10 - 4).toBe(6);
  });

  it("Debe multiplicar correctamente dos números", function () {
    expect(7 * 2).toBe(14);
  });

  it("Debe dividir correctamente dos números", function () {
    expect(12 / 3).toBe(4);
  });
});

describe("Manejo de cadenas", function () {
  it("Debe concatenar correctamente dos cadenas", function () {
    expect("Hola" + " Mundo").toBe("Hola Mundo");
  });

  it("Debe verificar la longitud de una cadena", function () {
    expect("Prueba".length).toBe(6);
  });

  it("Debe convertir una cadena a mayúsculas", function () {
    expect("javascript".toUpperCase()).toBe("JAVASCRIPT");
  });

  it("Debe convertir una cadena a minúsculas", function () {
    expect("TEST".toLowerCase()).toBe("test");
  });
});


describe("Métodos de Arrays", function () {
  it("Debe agregar un elemento al final del array con push()", function () {
    let arr = [1, 2, 3];
    arr.push(4);
    expect(arr).toEqual([1, 2, 3, 4]);
  });

  it("Debe eliminar el último elemento del array con pop()", function () {
    let arr = [1, 2, 3];
    let last = arr.pop();
    expect(last).toBe(3);
    expect(arr).toEqual([1, 2]);
  });

  it("Debe unir los elementos de un array en una cadena con join()", function () {
    let arr = ["Hola", "Mundo"];
    expect(arr.join(" ")).toBe("Hola Mundo");
  });

  it("Debe filtrar los números pares de un array con filter()", function () {
    let arr = [1, 2, 3, 4, 5, 6];
    let pares = arr.filter(num => num % 2 === 0);
    expect(pares).toEqual([2, 4, 6]);
  });
});

describe("Métodos de Objetos", function () {
  it("Debe obtener las claves de un objeto con Object.keys()", function () {
    let obj = { nombre: "Ana", edad: 25 };
    expect(Object.keys(obj)).toEqual(["nombre", "edad"]);
  });

  it("Debe obtener los valores de un objeto con Object.values()", function () {
    let obj = { nombre: "Ana", edad: 25 };
    expect(Object.values(obj)).toEqual(["Ana", 25]);
  });

  it("Debe verificar si un objeto tiene una propiedad con hasOwnProperty()", function () {
    let obj = { nombre: "Carlos", edad: 30 };
    expect(obj.hasOwnProperty("edad")).toBe(true);
    expect(obj.hasOwnProperty("direccion")).toBe(false);
  });

  it("Debe encontrar el primer número mayor a 10 en un array con find()", function () {
    let numeros = [3, 7, 12, 18, 20];
    let encontrado = numeros.find(num => num > 10);
    expect(encontrado).toBe(12);
  });
});
