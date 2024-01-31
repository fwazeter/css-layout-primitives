# Configuration Settings

Files in the `config` directory control design tokens (such as typographic & size / space scales) and macro settings for the layout primitives, such as Custom Prop prefixes, namespaces and size scales.

## _settings.scss

Controls prefix (for Custom Props) and namespacing (for class names).

### Prefix

Prefix controls CSS Custom Props prefix name. Always include "--", for example "--wf-" to render
custom props as "--wf-color" Default is "--" which will render "--"

### Default
```scss
$prefix: "--"
```

#### Render Result

```css
--color: black;
```

### Changing the value

When adding a namespacing prefix such as `--wf` to go ahead of custom properties, always add a following `--` or `-`

#### Example Change
```scss
$prefix: "--wf-"
```
#### Render Result

```css
:root {
	--wf-color: black; 
}

```

### Namespace

Namespace controls the namespacing of values for use in systems where basic class names such as `box` would conflict with other design systems or naming conventions.

The default is blank.

### Default

```scss
$namespace: ""
```

```css
box {
    padding: 1rem;
}
```

### Changing the value

When adding a namespace, replace $namespace variable entry with whatever namespace you'd like. Add any desired trailing code like `-` or `__`.

#### Example Change
```scss
$namespace: "wf-"
```
#### Render Result

```css
wf-box {
    padding: 1rem;
}
```

Not including the trailing `-` in `wf-` would result in the css class name being `wfbox`

## _scale.scss

The scale file configures an 8 point scale that renders custom properties based on the prefix and a configurable custom prop name.

It provides a mixin that other files can use to apply the appropriate custom props without duplicating the code entries, ensuring a consistent
spacing pattern.

### Naming

The default naming renders as `--scale` as a prefix to the value for the custom prop. We use numbering rather than t-shirt sizes because
it is easier to visualise as "steps up" or "down" where two dashed lines `--` represent a smaller value from the default `0` step and a single dashed
line `-` represents a step up.

For example `--scale--1` is read as "scale minus one" and `--scale-1` is read as "scale plus one" where `--scale-0` is the default.

### Configurable variables

#### Name
Name is compiled from a combination of the prefix, imported from `_settings.scss` and the set `customPropName`

### Default

```scss
$customPropName: 'scale';
$name: #{$settings.$prefix}#{$customPropName};
```

```css
:root {
	--scale--3: 'minus 3 value';
	--scale--2: 'minus 2 value';
	--scale--1: 'minus 1 value';
	--scale-0: 'default value';
	--scale-1: 'plus 1 value';
	--scale-2: 'plus 2 value';
	--scale-3: 'plus 3 value';
	--scale-4: 'plus 4 value';
}
```

### Changing the value

Changing the `$customPropName` will rename the scale tokens based on your desired name and with your preset prefix in the `_settings.scss` file.

Do not add a trailing `--` or `-`, these are added automatically.

#### Example Change
```scss
$customPropName: "super-size-me"
```
#### Render Result

```css
:root {
	--super-size-me--3: 'minus 3 value';
	--super-size-me--2: 'minus 2 value';
	--super-size-me--1: 'minus 1 value';
	--super-size-me-0: 'default value';
	--super-size-me-1: 'plus 1 value';
	--super-size-me-2: 'plus 2 value';
	--super-size-me-3: 'plus 3 value';
	--super-size-me-4: 'plus 4 value';
}
```