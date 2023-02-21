# `dataMongodbatlasAdvancedCluster` Submodule <a name="`dataMongodbatlasAdvancedCluster` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasAdvancedCluster <a name="DataMongodbatlasAdvancedCluster" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/d/advanced_cluster mongodbatlas_advanced_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster(scope: Construct, id: string, config: DataMongodbatlasAdvancedClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig">DataMongodbatlasAdvancedClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig">DataMongodbatlasAdvancedClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.resetPitEnabled">resetPitEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPitEnabled` <a name="resetPitEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.resetPitEnabled"></a>

```typescript
public resetPitEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.isConstruct"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.isTerraformElement"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.advancedConfiguration">advancedConfiguration</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList">DataMongodbatlasAdvancedClusterAdvancedConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.backupEnabled">backupEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.biConnectorConfig">biConnectorConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList">DataMongodbatlasAdvancedClusterBiConnectorConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.clusterType">clusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.connectionStrings">connectionStrings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList">DataMongodbatlasAdvancedClusterConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.createDate">createDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.encryptionAtRestProvider">encryptionAtRestProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList">DataMongodbatlasAdvancedClusterLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.mongoDbMajorVersion">mongoDbMajorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.mongoDbVersion">mongoDbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.paused">paused</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.replicationSpecs">replicationSpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList">DataMongodbatlasAdvancedClusterReplicationSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.rootCertType">rootCertType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.stateName">stateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.versionReleaseSystem">versionReleaseSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.pitEnabledInput">pitEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.pitEnabled">pitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `advancedConfiguration`<sup>Required</sup> <a name="advancedConfiguration" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.advancedConfiguration"></a>

```typescript
public readonly advancedConfiguration: DataMongodbatlasAdvancedClusterAdvancedConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList">DataMongodbatlasAdvancedClusterAdvancedConfigurationList</a>

---

##### `backupEnabled`<sup>Required</sup> <a name="backupEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.backupEnabled"></a>

```typescript
public readonly backupEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `biConnectorConfig`<sup>Required</sup> <a name="biConnectorConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.biConnectorConfig"></a>

```typescript
public readonly biConnectorConfig: DataMongodbatlasAdvancedClusterBiConnectorConfigList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList">DataMongodbatlasAdvancedClusterBiConnectorConfigList</a>

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.connectionStrings"></a>

```typescript
public readonly connectionStrings: DataMongodbatlasAdvancedClusterConnectionStringsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList">DataMongodbatlasAdvancedClusterConnectionStringsList</a>

---

##### `createDate`<sup>Required</sup> <a name="createDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.createDate"></a>

```typescript
public readonly createDate: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `encryptionAtRestProvider`<sup>Required</sup> <a name="encryptionAtRestProvider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.encryptionAtRestProvider"></a>

```typescript
public readonly encryptionAtRestProvider: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.labels"></a>

```typescript
public readonly labels: DataMongodbatlasAdvancedClusterLabelsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList">DataMongodbatlasAdvancedClusterLabelsList</a>

---

##### `mongoDbMajorVersion`<sup>Required</sup> <a name="mongoDbMajorVersion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.mongoDbMajorVersion"></a>

```typescript
public readonly mongoDbMajorVersion: string;
```

- *Type:* string

---

##### `mongoDbVersion`<sup>Required</sup> <a name="mongoDbVersion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.mongoDbVersion"></a>

```typescript
public readonly mongoDbVersion: string;
```

- *Type:* string

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.paused"></a>

```typescript
public readonly paused: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `replicationSpecs`<sup>Required</sup> <a name="replicationSpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.replicationSpecs"></a>

```typescript
public readonly replicationSpecs: DataMongodbatlasAdvancedClusterReplicationSpecsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList">DataMongodbatlasAdvancedClusterReplicationSpecsList</a>

---

##### `rootCertType`<sup>Required</sup> <a name="rootCertType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.rootCertType"></a>

```typescript
public readonly rootCertType: string;
```

- *Type:* string

---

##### `stateName`<sup>Required</sup> <a name="stateName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.stateName"></a>

```typescript
public readonly stateName: string;
```

- *Type:* string

---

##### `terminationProtectionEnabled`<sup>Required</sup> <a name="terminationProtectionEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.terminationProtectionEnabled"></a>

```typescript
public readonly terminationProtectionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `versionReleaseSystem`<sup>Required</sup> <a name="versionReleaseSystem" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.versionReleaseSystem"></a>

```typescript
public readonly versionReleaseSystem: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pitEnabledInput`<sup>Optional</sup> <a name="pitEnabledInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.pitEnabledInput"></a>

```typescript
public readonly pitEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pitEnabled`<sup>Required</sup> <a name="pitEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.pitEnabled"></a>

```typescript
public readonly pitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasAdvancedClusterAdvancedConfiguration <a name="DataMongodbatlasAdvancedClusterAdvancedConfiguration" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfiguration.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClusterAdvancedConfiguration: dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfiguration = { ... }
```


### DataMongodbatlasAdvancedClusterBiConnectorConfig <a name="DataMongodbatlasAdvancedClusterBiConnectorConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfig.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClusterBiConnectorConfig: dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfig = { ... }
```


### DataMongodbatlasAdvancedClusterConfig <a name="DataMongodbatlasAdvancedClusterConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClusterConfig: dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/advanced_cluster#name DataMongodbatlasAdvancedCluster#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/advanced_cluster#project_id DataMongodbatlasAdvancedCluster#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/advanced_cluster#id DataMongodbatlasAdvancedCluster#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.pitEnabled">pitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/advanced_cluster#pit_enabled DataMongodbatlasAdvancedCluster#pit_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/advanced_cluster#name DataMongodbatlasAdvancedCluster#name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/advanced_cluster#project_id DataMongodbatlasAdvancedCluster#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/advanced_cluster#id DataMongodbatlasAdvancedCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pitEnabled`<sup>Optional</sup> <a name="pitEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConfig.property.pitEnabled"></a>

```typescript
public readonly pitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/advanced_cluster#pit_enabled DataMongodbatlasAdvancedCluster#pit_enabled}.

---

### DataMongodbatlasAdvancedClusterConnectionStrings <a name="DataMongodbatlasAdvancedClusterConnectionStrings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStrings.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClusterConnectionStrings: dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStrings = { ... }
```


### DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint <a name="DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint: dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint = { ... }
```


### DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints <a name="DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints: dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints = { ... }
```


### DataMongodbatlasAdvancedClusterLabels <a name="DataMongodbatlasAdvancedClusterLabels" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabels.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClusterLabels: dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabels = { ... }
```


### DataMongodbatlasAdvancedClusterReplicationSpecs <a name="DataMongodbatlasAdvancedClusterReplicationSpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecs.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClusterReplicationSpecs: dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecs = { ... }
```


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs: dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs = { ... }
```


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling: dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling = { ... }
```


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs: dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs = { ... }
```


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling: dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling = { ... }
```


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs: dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs = { ... }
```


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs: dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasAdvancedClusterAdvancedConfigurationList <a name="DataMongodbatlasAdvancedClusterAdvancedConfigurationList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference <a name="DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.defaultReadConcern">defaultReadConcern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.defaultWriteConcern">defaultWriteConcern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLong">failIndexKeyTooLong</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.javascriptEnabled">javascriptEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocol">minimumEnabledTlsProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.noTableScan">noTableScan</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHours">oplogMinRetentionHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.oplogSizeMb">oplogSizeMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnector">sampleRefreshIntervalBiConnector</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnector">sampleSizeBiConnector</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfiguration">DataMongodbatlasAdvancedClusterAdvancedConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultReadConcern`<sup>Required</sup> <a name="defaultReadConcern" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.defaultReadConcern"></a>

```typescript
public readonly defaultReadConcern: string;
```

- *Type:* string

---

##### `defaultWriteConcern`<sup>Required</sup> <a name="defaultWriteConcern" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.defaultWriteConcern"></a>

```typescript
public readonly defaultWriteConcern: string;
```

- *Type:* string

---

##### `failIndexKeyTooLong`<sup>Required</sup> <a name="failIndexKeyTooLong" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.failIndexKeyTooLong"></a>

```typescript
public readonly failIndexKeyTooLong: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `javascriptEnabled`<sup>Required</sup> <a name="javascriptEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.javascriptEnabled"></a>

```typescript
public readonly javascriptEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `minimumEnabledTlsProtocol`<sup>Required</sup> <a name="minimumEnabledTlsProtocol" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocol"></a>

```typescript
public readonly minimumEnabledTlsProtocol: string;
```

- *Type:* string

---

##### `noTableScan`<sup>Required</sup> <a name="noTableScan" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.noTableScan"></a>

```typescript
public readonly noTableScan: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `oplogMinRetentionHours`<sup>Required</sup> <a name="oplogMinRetentionHours" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.oplogMinRetentionHours"></a>

```typescript
public readonly oplogMinRetentionHours: number;
```

- *Type:* number

---

##### `oplogSizeMb`<sup>Required</sup> <a name="oplogSizeMb" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.oplogSizeMb"></a>

```typescript
public readonly oplogSizeMb: number;
```

- *Type:* number

---

##### `sampleRefreshIntervalBiConnector`<sup>Required</sup> <a name="sampleRefreshIntervalBiConnector" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnector"></a>

```typescript
public readonly sampleRefreshIntervalBiConnector: number;
```

- *Type:* number

---

##### `sampleSizeBiConnector`<sup>Required</sup> <a name="sampleSizeBiConnector" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.sampleSizeBiConnector"></a>

```typescript
public readonly sampleSizeBiConnector: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClusterAdvancedConfiguration;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterAdvancedConfiguration">DataMongodbatlasAdvancedClusterAdvancedConfiguration</a>

---


### DataMongodbatlasAdvancedClusterBiConnectorConfigList <a name="DataMongodbatlasAdvancedClusterBiConnectorConfigList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference <a name="DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.property.readPreference">readPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfig">DataMongodbatlasAdvancedClusterBiConnectorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `readPreference`<sup>Required</sup> <a name="readPreference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.property.readPreference"></a>

```typescript
public readonly readPreference: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClusterBiConnectorConfig;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterBiConnectorConfig">DataMongodbatlasAdvancedClusterBiConnectorConfig</a>

---


### DataMongodbatlasAdvancedClusterConnectionStringsList <a name="DataMongodbatlasAdvancedClusterConnectionStringsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClusterConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClusterConnectionStringsOutputReference <a name="DataMongodbatlasAdvancedClusterConnectionStringsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.awsPrivateLink">awsPrivateLink</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.awsPrivateLinkSrv">awsPrivateLinkSrv</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.private">private</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.privateEndpoint">privateEndpoint</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList">DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.privateSrv">privateSrv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.standard">standard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.standardSrv">standardSrv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStrings">DataMongodbatlasAdvancedClusterConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsPrivateLink`<sup>Required</sup> <a name="awsPrivateLink" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.awsPrivateLink"></a>

```typescript
public readonly awsPrivateLink: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `awsPrivateLinkSrv`<sup>Required</sup> <a name="awsPrivateLinkSrv" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.awsPrivateLinkSrv"></a>

```typescript
public readonly awsPrivateLinkSrv: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `private`<sup>Required</sup> <a name="private" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.private"></a>

```typescript
public readonly private: string;
```

- *Type:* string

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.privateEndpoint"></a>

```typescript
public readonly privateEndpoint: DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList">DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList</a>

---

##### `privateSrv`<sup>Required</sup> <a name="privateSrv" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.privateSrv"></a>

```typescript
public readonly privateSrv: string;
```

- *Type:* string

---

##### `standard`<sup>Required</sup> <a name="standard" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.standard"></a>

```typescript
public readonly standard: string;
```

- *Type:* string

---

##### `standardSrv`<sup>Required</sup> <a name="standardSrv" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.standardSrv"></a>

```typescript
public readonly standardSrv: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClusterConnectionStrings;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStrings">DataMongodbatlasAdvancedClusterConnectionStrings</a>

---


### DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList <a name="DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference <a name="DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints">DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints">DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpoints</a>

---


### DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList <a name="DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference <a name="DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList">DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.srvConnectionString">srvConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint">DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.endpoints"></a>

```typescript
public readonly endpoints: DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList">DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointEndpointsList</a>

---

##### `srvConnectionString`<sup>Required</sup> <a name="srvConnectionString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.srvConnectionString"></a>

```typescript
public readonly srvConnectionString: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint">DataMongodbatlasAdvancedClusterConnectionStringsPrivateEndpoint</a>

---


### DataMongodbatlasAdvancedClusterLabelsList <a name="DataMongodbatlasAdvancedClusterLabelsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClusterLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClusterLabelsOutputReference <a name="DataMongodbatlasAdvancedClusterLabelsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabels">DataMongodbatlasAdvancedClusterLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClusterLabels;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterLabels">DataMongodbatlasAdvancedClusterLabels</a>

---


### DataMongodbatlasAdvancedClusterReplicationSpecsList <a name="DataMongodbatlasAdvancedClusterReplicationSpecsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference <a name="DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.containerId">containerId</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.numShards">numShards</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.regionConfigs">regionConfigs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.zoneName">zoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecs">DataMongodbatlasAdvancedClusterReplicationSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.containerId"></a>

```typescript
public readonly containerId: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `numShards`<sup>Required</sup> <a name="numShards" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.numShards"></a>

```typescript
public readonly numShards: number;
```

- *Type:* number

---

##### `regionConfigs`<sup>Required</sup> <a name="regionConfigs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.regionConfigs"></a>

```typescript
public readonly regionConfigs: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList</a>

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClusterReplicationSpecs;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecs">DataMongodbatlasAdvancedClusterReplicationSpecs</a>

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeEnabled">computeEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMaxInstanceSize">computeMaxInstanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMinInstanceSize">computeMinInstanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeScaleDownEnabled">computeScaleDownEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.diskGbEnabled">diskGbEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeEnabled`<sup>Required</sup> <a name="computeEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeEnabled"></a>

```typescript
public readonly computeEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `computeMaxInstanceSize`<sup>Required</sup> <a name="computeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMaxInstanceSize"></a>

```typescript
public readonly computeMaxInstanceSize: string;
```

- *Type:* string

---

##### `computeMinInstanceSize`<sup>Required</sup> <a name="computeMinInstanceSize" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMinInstanceSize"></a>

```typescript
public readonly computeMinInstanceSize: string;
```

- *Type:* string

---

##### `computeScaleDownEnabled`<sup>Required</sup> <a name="computeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeScaleDownEnabled"></a>

```typescript
public readonly computeScaleDownEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `diskGbEnabled`<sup>Required</sup> <a name="diskGbEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.diskGbEnabled"></a>

```typescript
public readonly diskGbEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScaling</a>

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.diskIops">diskIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.ebsVolumeType">ebsVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.instanceSize">instanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskIops`<sup>Required</sup> <a name="diskIops" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.diskIops"></a>

```typescript
public readonly diskIops: number;
```

- *Type:* number

---

##### `ebsVolumeType`<sup>Required</sup> <a name="ebsVolumeType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.ebsVolumeType"></a>

```typescript
public readonly ebsVolumeType: string;
```

- *Type:* string

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.instanceSize"></a>

```typescript
public readonly instanceSize: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecs</a>

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeEnabled">computeEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMaxInstanceSize">computeMaxInstanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMinInstanceSize">computeMinInstanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeScaleDownEnabled">computeScaleDownEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.diskGbEnabled">diskGbEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeEnabled`<sup>Required</sup> <a name="computeEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeEnabled"></a>

```typescript
public readonly computeEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `computeMaxInstanceSize`<sup>Required</sup> <a name="computeMaxInstanceSize" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMaxInstanceSize"></a>

```typescript
public readonly computeMaxInstanceSize: string;
```

- *Type:* string

---

##### `computeMinInstanceSize`<sup>Required</sup> <a name="computeMinInstanceSize" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMinInstanceSize"></a>

```typescript
public readonly computeMinInstanceSize: string;
```

- *Type:* string

---

##### `computeScaleDownEnabled`<sup>Required</sup> <a name="computeScaleDownEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeScaleDownEnabled"></a>

```typescript
public readonly computeScaleDownEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `diskGbEnabled`<sup>Required</sup> <a name="diskGbEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.diskGbEnabled"></a>

```typescript
public readonly diskGbEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScaling</a>

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.diskIops">diskIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.ebsVolumeType">ebsVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.instanceSize">instanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskIops`<sup>Required</sup> <a name="diskIops" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.diskIops"></a>

```typescript
public readonly diskIops: number;
```

- *Type:* number

---

##### `ebsVolumeType`<sup>Required</sup> <a name="ebsVolumeType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.ebsVolumeType"></a>

```typescript
public readonly ebsVolumeType: string;
```

- *Type:* string

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.instanceSize"></a>

```typescript
public readonly instanceSize: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecs</a>

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsAutoScaling">analyticsAutoScaling</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsSpecs">analyticsSpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.backingProviderName">backingProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.electableSpecs">electableSpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.readOnlySpecs">readOnlySpecs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analyticsAutoScaling`<sup>Required</sup> <a name="analyticsAutoScaling" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsAutoScaling"></a>

```typescript
public readonly analyticsAutoScaling: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsAutoScalingList</a>

---

##### `analyticsSpecs`<sup>Required</sup> <a name="analyticsSpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.analyticsSpecs"></a>

```typescript
public readonly analyticsSpecs: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAnalyticsSpecsList</a>

---

##### `autoScaling`<sup>Required</sup> <a name="autoScaling" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.autoScaling"></a>

```typescript
public readonly autoScaling: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsAutoScalingList</a>

---

##### `backingProviderName`<sup>Required</sup> <a name="backingProviderName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.backingProviderName"></a>

```typescript
public readonly backingProviderName: string;
```

- *Type:* string

---

##### `electableSpecs`<sup>Required</sup> <a name="electableSpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.electableSpecs"></a>

```typescript
public readonly electableSpecs: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsElectableSpecsList</a>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `readOnlySpecs`<sup>Required</sup> <a name="readOnlySpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.readOnlySpecs"></a>

```typescript
public readonly readOnlySpecs: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList</a>

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigs</a>

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference <a name="DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasAdvancedCluster } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.diskIops">diskIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.ebsVolumeType">ebsVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.instanceSize">instanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskIops`<sup>Required</sup> <a name="diskIops" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.diskIops"></a>

```typescript
public readonly diskIops: number;
```

- *Type:* number

---

##### `ebsVolumeType`<sup>Required</sup> <a name="ebsVolumeType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.ebsVolumeType"></a>

```typescript
public readonly ebsVolumeType: string;
```

- *Type:* string

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.instanceSize"></a>

```typescript
public readonly instanceSize: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedCluster.DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs">DataMongodbatlasAdvancedClusterReplicationSpecsRegionConfigsReadOnlySpecs</a>

---



