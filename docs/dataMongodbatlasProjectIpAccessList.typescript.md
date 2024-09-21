# `dataMongodbatlasProjectIpAccessList` Submodule <a name="`dataMongodbatlasProjectIpAccessList` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasProjectIpAccessList <a name="DataMongodbatlasProjectIpAccessList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/data-sources/project_ip_access_list mongodbatlas_project_ip_access_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer"></a>

```typescript
import { dataMongodbatlasProjectIpAccessList } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList(scope: Construct, id: string, config: DataMongodbatlasProjectIpAccessListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig">DataMongodbatlasProjectIpAccessListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig">DataMongodbatlasProjectIpAccessListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.resetAwsSecurityGroup">resetAwsSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.resetIpAddress">resetIpAddress</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAwsSecurityGroup` <a name="resetAwsSecurityGroup" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.resetAwsSecurityGroup"></a>

```typescript
public resetAwsSecurityGroup(): void
```

##### `resetCidrBlock` <a name="resetCidrBlock" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.resetCidrBlock"></a>

```typescript
public resetCidrBlock(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasProjectIpAccessList resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.isConstruct"></a>

```typescript
import { dataMongodbatlasProjectIpAccessList } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.isTerraformElement"></a>

```typescript
import { dataMongodbatlasProjectIpAccessList } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasProjectIpAccessList } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasProjectIpAccessList } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasProjectIpAccessList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasProjectIpAccessList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasProjectIpAccessList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/data-sources/project_ip_access_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasProjectIpAccessList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.awsSecurityGroupInput">awsSecurityGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.cidrBlockInput">cidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.awsSecurityGroup">awsSecurityGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `awsSecurityGroupInput`<sup>Optional</sup> <a name="awsSecurityGroupInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.awsSecurityGroupInput"></a>

```typescript
public readonly awsSecurityGroupInput: string;
```

- *Type:* string

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.cidrBlockInput"></a>

```typescript
public readonly cidrBlockInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `awsSecurityGroup`<sup>Required</sup> <a name="awsSecurityGroup" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.awsSecurityGroup"></a>

```typescript
public readonly awsSecurityGroup: string;
```

- *Type:* string

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasProjectIpAccessListConfig <a name="DataMongodbatlasProjectIpAccessListConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.Initializer"></a>

```typescript
import { dataMongodbatlasProjectIpAccessList } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasProjectIpAccessListConfig: dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/data-sources/project_ip_access_list#project_id DataMongodbatlasProjectIpAccessList#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.awsSecurityGroup">awsSecurityGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/data-sources/project_ip_access_list#aws_security_group DataMongodbatlasProjectIpAccessList#aws_security_group}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/data-sources/project_ip_access_list#cidr_block DataMongodbatlasProjectIpAccessList#cidr_block}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/data-sources/project_ip_access_list#ip_address DataMongodbatlasProjectIpAccessList#ip_address}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/data-sources/project_ip_access_list#project_id DataMongodbatlasProjectIpAccessList#project_id}.

---

##### `awsSecurityGroup`<sup>Optional</sup> <a name="awsSecurityGroup" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.awsSecurityGroup"></a>

```typescript
public readonly awsSecurityGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/data-sources/project_ip_access_list#aws_security_group DataMongodbatlasProjectIpAccessList#aws_security_group}.

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/data-sources/project_ip_access_list#cidr_block DataMongodbatlasProjectIpAccessList#cidr_block}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/data-sources/project_ip_access_list#ip_address DataMongodbatlasProjectIpAccessList#ip_address}.

---



