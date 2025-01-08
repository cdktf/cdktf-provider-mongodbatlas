# `dataMongodbatlasThirdPartyIntegrations` Submodule <a name="`dataMongodbatlasThirdPartyIntegrations` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasThirdPartyIntegrations <a name="DataMongodbatlasThirdPartyIntegrations" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/third_party_integrations mongodbatlas_third_party_integrations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.Initializer"></a>

```typescript
import { dataMongodbatlasThirdPartyIntegrations } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations(scope: Construct, id: string, config: DataMongodbatlasThirdPartyIntegrationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig">DataMongodbatlasThirdPartyIntegrationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig">DataMongodbatlasThirdPartyIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasThirdPartyIntegrations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.isConstruct"></a>

```typescript
import { dataMongodbatlasThirdPartyIntegrations } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.isTerraformElement"></a>

```typescript
import { dataMongodbatlasThirdPartyIntegrations } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasThirdPartyIntegrations } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.generateConfigForImport"></a>

```typescript
import { dataMongodbatlasThirdPartyIntegrations } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataMongodbatlasThirdPartyIntegrations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataMongodbatlasThirdPartyIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataMongodbatlasThirdPartyIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/third_party_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasThirdPartyIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList">DataMongodbatlasThirdPartyIntegrationsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.results"></a>

```typescript
public readonly results: DataMongodbatlasThirdPartyIntegrationsResultsList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList">DataMongodbatlasThirdPartyIntegrationsResultsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasThirdPartyIntegrationsConfig <a name="DataMongodbatlasThirdPartyIntegrationsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.Initializer"></a>

```typescript
import { dataMongodbatlasThirdPartyIntegrations } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasThirdPartyIntegrationsConfig: dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/third_party_integrations#project_id DataMongodbatlasThirdPartyIntegrations#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/third_party_integrations#id DataMongodbatlasThirdPartyIntegrations#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/third_party_integrations#project_id DataMongodbatlasThirdPartyIntegrations#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/third_party_integrations#id DataMongodbatlasThirdPartyIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasThirdPartyIntegrationsResults <a name="DataMongodbatlasThirdPartyIntegrationsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResults.Initializer"></a>

```typescript
import { dataMongodbatlasThirdPartyIntegrations } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasThirdPartyIntegrationsResults: dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResults = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasThirdPartyIntegrationsResultsList <a name="DataMongodbatlasThirdPartyIntegrationsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.Initializer"></a>

```typescript
import { dataMongodbatlasThirdPartyIntegrations } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.get"></a>

```typescript
public get(index: number): DataMongodbatlasThirdPartyIntegrationsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataMongodbatlasThirdPartyIntegrationsResultsOutputReference <a name="DataMongodbatlasThirdPartyIntegrationsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasThirdPartyIntegrations } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.microsoftTeamsWebhookUrl">microsoftTeamsWebhookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.routingKey">routingKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.serviceDiscovery">serviceDiscovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.serviceKey">serviceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.teamName">teamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResults">DataMongodbatlasThirdPartyIntegrationsResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `microsoftTeamsWebhookUrl`<sup>Required</sup> <a name="microsoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.microsoftTeamsWebhookUrl"></a>

```typescript
public readonly microsoftTeamsWebhookUrl: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `routingKey`<sup>Required</sup> <a name="routingKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.routingKey"></a>

```typescript
public readonly routingKey: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `serviceDiscovery`<sup>Required</sup> <a name="serviceDiscovery" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.serviceDiscovery"></a>

```typescript
public readonly serviceDiscovery: string;
```

- *Type:* string

---

##### `serviceKey`<sup>Required</sup> <a name="serviceKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.serviceKey"></a>

```typescript
public readonly serviceKey: string;
```

- *Type:* string

---

##### `teamName`<sup>Required</sup> <a name="teamName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.teamName"></a>

```typescript
public readonly teamName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasThirdPartyIntegrationsResults;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasThirdPartyIntegrations.DataMongodbatlasThirdPartyIntegrationsResults">DataMongodbatlasThirdPartyIntegrationsResults</a>

---



