## Brainfuckn't API

## Endpoints

### POST /

Takes BFNT input and executes it

#### Request Body

```json
{
  "script": "+8;\nrepete;\n  avanca;\n  +4;\n\n  repete;\n    avanca;+2;avanca;+3;avanca;+3;avanca;+;volta4;-;\n  fim;\n\n  avanca;+;avanca;+;avanca;-;avanca2;+;\n\n  repete;\n    volta;\n  fim;\n\n  volta;-;\nfim;\n\navanca2;imprime;avanca;-3;imprime;+7;imprime2;+3;imprime;avanca2;imprime;volta;-;imprime;volta;imprime;+3;imprime;-6;imprime;-8;imprime;avanca2;+;imprime;avanca;+2;imprime;\n"
}
```

#### Response body

```json
{
  "result": "Hello World!"
}
```

### POST /transpile

Takes this:

```
+8;
repete;
  avanca;
  +4;

  repete;
    avanca;+2;avanca;+3;avanca;+3;avanca;+;volta4;-;
  fim;

  avanca;+;avanca;+;avanca;-;avanca2;+;

  repete;
    volta;
  fim;

  volta;-;
fim;

avanca2;imprime;avanca;-3;imprime;+7;imprime2;+3;imprime;avanca2;imprime;volta;-;imprime;volta;imprime;+3;imprime;-6;imprime;-8;imprime;avanca2;+;imprime;
```

and tranpiles it into this:

```brainfuck
++++++++
[
  >
  ++++

  [
    >++>+++>+++>+<<<<-
  ]

  >+>+>->>+

  [
    <
  ]

  <-
]

>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.
```

#### Request Body

```json
{
  "script": "+8;\nrepete;\n  avanca;\n  +4;\n\n  repete;\n    avanca;+2;avanca;+3;avanca;+3;avanca;+;volta4;-;\n  fim;\n\n  avanca;+;avanca;+;avanca;-;avanca2;+;\n\n  repete;\n    volta;\n  fim;\n\n  volta;-;\nfim;\n\navanca2;imprime;avanca;-3;imprime;+7;imprime2;+3;imprime;avanca2;imprime;volta;-;imprime;volta;imprime;+3;imprime;-6;imprime;-8;imprime;avanca2;+;imprime;avanca;+2;imprime;\n"
}
```

#### Response body

```json
{
  "result": "++++++++\n[\n  >\n  ++++\n\n  [\n    >++>+++>+++>+<<<<-\n  ]\n\n  >+>+>->>+\n\n  [\n    <\n  ]\n\n  <-\n]\n\n>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.\n"
}
```
