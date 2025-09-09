# `dataMongodbatlasMongodbEmployeeAccessGrant` Submodule <a name="`dataMongodbatlasMongodbEmployeeAccessGrant` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasMongodbEmployeeAccessGrant <a name="DataMongodbatlasMongodbEmployeeAccessGrant" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.0/docs/data-sources/mongodb_employee_access_grant mongodbatlas_mongodb_employee_access_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.Initializer"></a>

```typescript
import { dataMongodbatlasMongodbEmployeeAccessGrant } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant(scope: Construct, id: string, config: DataMongodbatlasMongodbEmployeeAccessGrantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig">DataMongodbatlasMongodbEmployeeAccessGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig">DataMongodbatlasMongodbEmployeeAccessGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasMongodbEmployeeAccessGrant resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.isConstruct"></a>

```typescript
import { dataMongodbatlasMongodbEmployeeAccessGrant } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.isTerraformElement"></a>

```typescript
import { dataMongodbatlasMongodbEmployeeAccessGrant } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasMongodbEmployeeAccessGrant } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasMongodbEmployeeAccessGrant } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasMongodbEmployeeAccessGrant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasMongodbEmployeeAccessGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasMongodbEmployeeAccessGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.0/docs/data-sources/mongodb_employee_access_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasMongodbEmployeeAccessGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.expirationTime">expirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.grantType">grantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

---

##### `grantType`<sup>Required</sup> <a name="grantType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.grantType"></a>

```typescript
public readonly grantType: string;
```

- *Type:* string

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasMongodbEmployeeAccessGrantConfig <a name="DataMongodbatlasMongodbEmployeeAccessGrantConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.Initializer"></a>

```typescript
import { dataMongodbatlasMongodbEmployeeAccessGrant } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasMongodbEmployeeAccessGrantConfig: dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Human-readable label that identifies this cluster. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.projectId">projectId</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies your project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Human-readable label that identifies this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.0/docs/data-sources/mongodb_employee_access_grant#cluster_name DataMongodbatlasMongodbEmployeeAccessGrant#cluster_name}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMongodbEmployeeAccessGrant.DataMongodbatlasMongodbEmployeeAccessGrantConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies your project.

Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.0/docs/data-sources/mongodb_employee_access_grant#project_id DataMongodbatlasMongodbEmployeeAccessGrant#project_id}

---



