### Hexlet tests and linter status:
[![hexlet-check](https://github.com/Tokimikichika/fullstack-javascript-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Tokimikichika/fullstack-javascript-project-46/actions/workflows/hexlet-check.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/a3144fbad4537b25969a/maintainability)](https://codeclimate.com/github/Tokimikichika/fullstack-javascript-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a3144fbad4537b25969a/test_coverage)](https://codeclimate.com/github/Tokimikichika/fullstack-javascript-project-46/test_coverage)

### Info:
```The "difference calculator" is a CLI application that compares two files in the format of (.json, .yaml, .yml)```

### Install:
```
- git clone https://github.com/Tokimikichika/fullstack-javascript-project-46.git
- cd fullstack-javascript-project-46
- make install
```

###Usage

```make test```

https://asciinema.org/a/654070

```gendiff -h```
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

###Options
-V, --version: output the version of the package
-f, --format [type]: output format (supported types: stylish, plain, json)
-h, --help: display usage information

###For example

```gendiff filepath1.json filepath2.json```

https://asciinema.org/a/654065

```gendiff filepath1.yaml filepath2.yaml```

https://asciinema.org/a/654066

```gendiff filepath1.json filepath2.json```

https://asciinema.org/a/654067

```gendiff --format plain file1.json file2.json```

https://asciinema.org/a/654068

```gendiff --format json file1.json file2.json```

https://asciinema.org/a/654069