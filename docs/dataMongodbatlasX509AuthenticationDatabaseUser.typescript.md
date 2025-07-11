# `dataMongodbatlasX509AuthenticationDatabaseUser` Submodule <a name="`dataMongodbatlasX509AuthenticationDatabaseUser` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasX509AuthenticationDatabaseUser <a name="DataMongodbatlasX509AuthenticationDatabaseUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/x509_authentication_database_user mongodbatlas_x509_authentication_database_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer"></a>

```typescript
import { dataMongodbatlasX509AuthenticationDatabaseUser } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser(scope: Construct, id: string, config: DataMongodbatlasX509AuthenticationDatabaseUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig">DataMongodbatlasX509AuthenticationDatabaseUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig">DataMongodbatlasX509AuthenticationDatabaseUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetId"></a>

```typescript
public resetId(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetUsername"></a>

```typescript
public resetUsername(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasX509AuthenticationDatabaseUser resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isConstruct"></a>

```typescript
import { dataMongodbatlasX509AuthenticationDatabaseUser } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformElement"></a>

```typescript
import { dataMongodbatlasX509AuthenticationDatabaseUser } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasX509AuthenticationDatabaseUser } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasX509AuthenticationDatabaseUser } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasX509AuthenticationDatabaseUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasX509AuthenticationDatabaseUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasX509AuthenticationDatabaseUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/x509_authentication_database_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasX509AuthenticationDatabaseUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.certificates">certificates</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList">DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.customerX509Cas">customerX509Cas</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.certificates"></a>

```typescript
public readonly certificates: DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList">DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList</a>

---

##### `customerX509Cas`<sup>Required</sup> <a name="customerX509Cas" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.customerX509Cas"></a>

```typescript
public readonly customerX509Cas: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasX509AuthenticationDatabaseUserCertificates <a name="DataMongodbatlasX509AuthenticationDatabaseUserCertificates" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificates.Initializer"></a>

```typescript
import { dataMongodbatlasX509AuthenticationDatabaseUser } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasX509AuthenticationDatabaseUserCertificates: dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificates = { ... }
```


### DataMongodbatlasX509AuthenticationDatabaseUserConfig <a name="DataMongodbatlasX509AuthenticationDatabaseUserConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.Initializer"></a>

```typescript
import { dataMongodbatlasX509AuthenticationDatabaseUser } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasX509AuthenticationDatabaseUserConfig: dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/x509_authentication_database_user#project_id DataMongodbatlasX509AuthenticationDatabaseUser#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/x509_authentication_database_user#id DataMongodbatlasX509AuthenticationDatabaseUser#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/x509_authentication_database_user#username DataMongodbatlasX509AuthenticationDatabaseUser#username}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/x509_authentication_database_user#project_id DataMongodbatlasX509AuthenticationDatabaseUser#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/x509_authentication_database_user#id DataMongodbatlasX509AuthenticationDatabaseUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/x509_authentication_database_user#username DataMongodbatlasX509AuthenticationDatabaseUser#username}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList <a name="DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer"></a>

```typescript
import { dataMongodbatlasX509AuthenticationDatabaseUser } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.get"></a>

```typescript
public get(index: number): DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference <a name="DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasX509AuthenticationDatabaseUser } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.notAfter">notAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificates">DataMongodbatlasX509AuthenticationDatabaseUserCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `notAfter`<sup>Required</sup> <a name="notAfter" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.notAfter"></a>

```typescript
public readonly notAfter: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasX509AuthenticationDatabaseUserCertificates;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificates">DataMongodbatlasX509AuthenticationDatabaseUserCertificates</a>

---



