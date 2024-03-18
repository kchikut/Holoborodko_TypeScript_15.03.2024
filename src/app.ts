/*
//1
Вам потрібно створити тип `DeepReadonly` який буде робити доступними тільки для читання навіть  властивості вкладених обʼєктів.
//2
Вам потрібно створити тип `DeepRequireReadonly` який буде робити доступними тільки для читання навіть  властивості вкладених обʼєктів та ще й робити їх обовʼязковими.
//3
Вам потрібно сворити тип `UpperCaseKeys`, який буде приводити всі ключі до верхнього регістру.
//4
Створіть тип `ObjectToPropertyDescriptor`, який перетворює звичайний обʼєкт на обʼєкт де кожне `value` є дескриптором.

Підказка:
Використовуйте рекурсію
Використовуйте вбудований тип PropertyDescriptor*/
//1
type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};
//2
type DeepRequireReadonly<T> = {
    readonly [K in keyof T]-?: T[K] extends object ? DeepRequireReadonly<T[K]> : T[K];
};
//3
type UpperCaseKeys<T> = {
    [K in keyof T as Uppercase<string & K>]: T[K];
};
//4
type ObjectToPropertyDescriptor<T> = {
    [K in keyof T]: PropertyDescriptor;
};
