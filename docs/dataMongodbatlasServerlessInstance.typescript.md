# `data_mongodbatlas_serverless_instance`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_serverless_instance`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/serverless_instance).

# `dataMongodbatlasServerlessInstance` Submodule <a name="`dataMongodbatlasServerlessInstance` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasServerlessInstance <a name="DataMongodbatlasServerlessInstance" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/serverless_instance mongodbatlas_serverless_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer"></a>

```typescript
import { dataMongodbatlasServerlessInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance(scope: Construct, id: string, config: DataMongodbatlasServerlessInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig">DataMongodbatlasServerlessInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig">DataMongodbatlasServerlessInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.putLinks">putLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.resetContinuousBackupEnabled">resetContinuousBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.resetLinks">resetLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.resetStateName">resetStateName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putLinks` <a name="putLinks" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.putLinks"></a>

```typescript
public putLinks(value: IResolvable | DataMongodbatlasServerlessInstanceLinks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.putLinks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks">DataMongodbatlasServerlessInstanceLinks</a>[]

---

##### `resetContinuousBackupEnabled` <a name="resetContinuousBackupEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.resetContinuousBackupEnabled"></a>

```typescript
public resetContinuousBackupEnabled(): void
```

##### `resetLinks` <a name="resetLinks" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.resetLinks"></a>

```typescript
public resetLinks(): void
```

##### `resetStateName` <a name="resetStateName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.resetStateName"></a>

```typescript
public resetStateName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.isConstruct"></a>

```typescript
import { dataMongodbatlasServerlessInstance } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.isTerraformElement"></a>

```typescript
import { dataMongodbatlasServerlessInstance } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasServerlessInstance } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.connectionStringsPrivateEndpointSrv">connectionStringsPrivateEndpointSrv</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.connectionStringsStandardSrv">connectionStringsStandardSrv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.createDate">createDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.links">links</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList">DataMongodbatlasServerlessInstanceLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.mongoDbVersion">mongoDbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.providerSettingsBackingProviderName">providerSettingsBackingProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.providerSettingsProviderName">providerSettingsProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.providerSettingsRegionName">providerSettingsRegionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.continuousBackupEnabledInput">continuousBackupEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.linksInput">linksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks">DataMongodbatlasServerlessInstanceLinks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.stateNameInput">stateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.continuousBackupEnabled">continuousBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.stateName">stateName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `connectionStringsPrivateEndpointSrv`<sup>Required</sup> <a name="connectionStringsPrivateEndpointSrv" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.connectionStringsPrivateEndpointSrv"></a>

```typescript
public readonly connectionStringsPrivateEndpointSrv: string[];
```

- *Type:* string[]

---

##### `connectionStringsStandardSrv`<sup>Required</sup> <a name="connectionStringsStandardSrv" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.connectionStringsStandardSrv"></a>

```typescript
public readonly connectionStringsStandardSrv: string;
```

- *Type:* string

---

##### `createDate`<sup>Required</sup> <a name="createDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.createDate"></a>

```typescript
public readonly createDate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.links"></a>

```typescript
public readonly links: DataMongodbatlasServerlessInstanceLinksList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList">DataMongodbatlasServerlessInstanceLinksList</a>

---

##### `mongoDbVersion`<sup>Required</sup> <a name="mongoDbVersion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.mongoDbVersion"></a>

```typescript
public readonly mongoDbVersion: string;
```

- *Type:* string

---

##### `providerSettingsBackingProviderName`<sup>Required</sup> <a name="providerSettingsBackingProviderName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.providerSettingsBackingProviderName"></a>

```typescript
public readonly providerSettingsBackingProviderName: string;
```

- *Type:* string

---

##### `providerSettingsProviderName`<sup>Required</sup> <a name="providerSettingsProviderName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.providerSettingsProviderName"></a>

```typescript
public readonly providerSettingsProviderName: string;
```

- *Type:* string

---

##### `providerSettingsRegionName`<sup>Required</sup> <a name="providerSettingsRegionName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.providerSettingsRegionName"></a>

```typescript
public readonly providerSettingsRegionName: string;
```

- *Type:* string

---

##### `terminationProtectionEnabled`<sup>Required</sup> <a name="terminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.terminationProtectionEnabled"></a>

```typescript
public readonly terminationProtectionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `continuousBackupEnabledInput`<sup>Optional</sup> <a name="continuousBackupEnabledInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.continuousBackupEnabledInput"></a>

```typescript
public readonly continuousBackupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `linksInput`<sup>Optional</sup> <a name="linksInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.linksInput"></a>

```typescript
public readonly linksInput: IResolvable | DataMongodbatlasServerlessInstanceLinks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks">DataMongodbatlasServerlessInstanceLinks</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `stateNameInput`<sup>Optional</sup> <a name="stateNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.stateNameInput"></a>

```typescript
public readonly stateNameInput: string;
```

- *Type:* string

---

##### `continuousBackupEnabled`<sup>Required</sup> <a name="continuousBackupEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.continuousBackupEnabled"></a>

```typescript
public readonly continuousBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `stateName`<sup>Required</sup> <a name="stateName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.stateName"></a>

```typescript
public readonly stateName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasServerlessInstanceConfig <a name="DataMongodbatlasServerlessInstanceConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.Initializer"></a>

```typescript
import { dataMongodbatlasServerlessInstance } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasServerlessInstanceConfig: dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/serverless_instance#name DataMongodbatlasServerlessInstance#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/serverless_instance#project_id DataMongodbatlasServerlessInstance#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.continuousBackupEnabled">continuousBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/serverless_instance#continuous_backup_enabled DataMongodbatlasServerlessInstance#continuous_backup_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.links">links</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks">DataMongodbatlasServerlessInstanceLinks</a>[]</code> | links block. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.stateName">stateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/serverless_instance#state_name DataMongodbatlasServerlessInstance#state_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/serverless_instance#name DataMongodbatlasServerlessInstance#name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/serverless_instance#project_id DataMongodbatlasServerlessInstance#project_id}.

---

##### `continuousBackupEnabled`<sup>Optional</sup> <a name="continuousBackupEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.continuousBackupEnabled"></a>

```typescript
public readonly continuousBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/serverless_instance#continuous_backup_enabled DataMongodbatlasServerlessInstance#continuous_backup_enabled}.

---

##### `links`<sup>Optional</sup> <a name="links" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.links"></a>

```typescript
public readonly links: IResolvable | DataMongodbatlasServerlessInstanceLinks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks">DataMongodbatlasServerlessInstanceLinks</a>[]

links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/serverless_instance#links DataMongodbatlasServerlessInstance#links}

---

##### `stateName`<sup>Optional</sup> <a name="stateName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.stateName"></a>

```typescript
public readonly stateName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/serverless_instance#state_name DataMongodbatlasServerlessInstance#state_name}.

---

### DataMongodbatlasServerlessInstanceLinks <a name="DataMongodbatlasServerlessInstanceLinks" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks.Initializer"></a>

```typescript
import { dataMongodbatlasServerlessInstance } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasServerlessInstanceLinks: dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasServerlessInstanceLinksList <a name="DataMongodbatlasServerlessInstanceLinksList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.Initializer"></a>

```typescript
import { dataMongodbatlasServerlessInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.get"></a>

```typescript
public get(index: number): DataMongodbatlasServerlessInstanceLinksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks">DataMongodbatlasServerlessInstanceLinks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataMongodbatlasServerlessInstanceLinks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks">DataMongodbatlasServerlessInstanceLinks</a>[]

---


### DataMongodbatlasServerlessInstanceLinksOutputReference <a name="DataMongodbatlasServerlessInstanceLinksOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasServerlessInstance } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.property.href">href</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.property.rel">rel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks">DataMongodbatlasServerlessInstanceLinks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `href`<sup>Required</sup> <a name="href" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.property.href"></a>

```typescript
public readonly href: string;
```

- *Type:* string

---

##### `rel`<sup>Required</sup> <a name="rel" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.property.rel"></a>

```typescript
public readonly rel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataMongodbatlasServerlessInstanceLinks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks">DataMongodbatlasServerlessInstanceLinks</a>

---



