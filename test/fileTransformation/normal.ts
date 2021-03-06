import { enumerate } from '../../index';

enumerate();

type Foo = 'foo';
const Foo = enumerate<Foo>();
console.log(Foo.foo);

enumerate<'foo' | 'bar'>().bar;

type FooBar = Foo | 'bar';
type FooBarBaz = FooBar | 'foo' | 'baz' | string;
const FooBarBaz = enumerate<FooBarBaz>();
FooBarBaz.ping = 'pong';

enumerate.toString();

class MyClass<T extends string> {
  enumerate() {
    return enumerate<T>();
  }
}
