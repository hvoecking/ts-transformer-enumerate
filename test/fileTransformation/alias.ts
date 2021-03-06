import { enumerate as e } from '../../index';

e();

type Foo = 'foo';
const Foo = e<Foo>();
console.log(Foo.foo);

e<'foo' | 'bar'>().bar;

type FooBar = Foo | 'bar';
type FooBarBaz = FooBar | 'foo' | 'baz' | string;
const FooBarBaz = e<FooBarBaz>();
FooBarBaz.ping = 'pong';

function enumerate() {
  return '';
}
const a = enumerate();

e.toString();

class MyClass<T extends string> {
  enumerate() {
    return e<T>();
  }
}
