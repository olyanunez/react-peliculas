import StringSchema from "Yup/lib/string";

declare module 'yup' {
    class StringSchema{
        primeraLetraMayuscula(): this;
    }
}