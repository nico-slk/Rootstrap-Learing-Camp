export const elevadoAlCuadrado = async (num) => {
  try {
    return await (num ** 2);
  } catch (error) {
    throw new Error(`Error al calcular ${num} al cuadrado.`);
  }
};
