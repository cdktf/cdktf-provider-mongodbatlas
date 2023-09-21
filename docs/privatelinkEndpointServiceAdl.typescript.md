# `mongodbatlas_privatelink_endpoint_service_adl`

Refer to the Terraform Registory for docs: [`mongodbatlas_privatelink_endpoint_service_adl`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/privatelink_endpoint_service_adl).

# `privatelinkEndpointServiceAdl` Submodule <a name="`privatelinkEndpointServiceAdl` Submodule" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivatelinkEndpointServiceAdl <a name="PrivatelinkEndpointServiceAdl" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/privatelink_endpoint_service_adl mongodbatlas_privatelink_endpoint_service_adl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.Initializer"></a>

```typescript
import { privatelinkEndpointServiceAdl } from '@cdktf/provider-mongodbatlas'

new privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl(scope: Construct, id: string, config: PrivatelinkEndpointServiceAdlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig">PrivatelinkEndpointServiceAdlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig">PrivatelinkEndpointServiceAdlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.isConstruct"></a>

```typescript
import { privatelinkEndpointServiceAdl } from '@cdktf/provider-mongodbatlas'

privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.isTerraformElement"></a>

```typescript
import { privatelinkEndpointServiceAdl } from '@cdktf/provider-mongodbatlas'

privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.isTerraformResource"></a>

```typescript
import { privatelinkEndpointServiceAdl } from '@cdktf/provider-mongodbatlas'

privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.endpointIdInput">endpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `endpointIdInput`<sup>Optional</sup> <a name="endpointIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.endpointIdInput"></a>

```typescript
public readonly endpointIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivatelinkEndpointServiceAdlConfig <a name="PrivatelinkEndpointServiceAdlConfig" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.Initializer"></a>

```typescript
import { privatelinkEndpointServiceAdl } from '@cdktf/provider-mongodbatlas'

const privatelinkEndpointServiceAdlConfig: privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.endpointId">endpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/privatelink_endpoint_service_adl#endpoint_id PrivatelinkEndpointServiceAdl#endpoint_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/privatelink_endpoint_service_adl#project_id PrivatelinkEndpointServiceAdl#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.providerName">providerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/privatelink_endpoint_service_adl#provider_name PrivatelinkEndpointServiceAdl#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/privatelink_endpoint_service_adl#type PrivatelinkEndpointServiceAdl#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/privatelink_endpoint_service_adl#comment PrivatelinkEndpointServiceAdl#comment}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/privatelink_endpoint_service_adl#id PrivatelinkEndpointServiceAdl#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/privatelink_endpoint_service_adl#endpoint_id PrivatelinkEndpointServiceAdl#endpoint_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/privatelink_endpoint_service_adl#project_id PrivatelinkEndpointServiceAdl#project_id}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/privatelink_endpoint_service_adl#provider_name PrivatelinkEndpointServiceAdl#provider_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/privatelink_endpoint_service_adl#type PrivatelinkEndpointServiceAdl#type}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/privatelink_endpoint_service_adl#comment PrivatelinkEndpointServiceAdl#comment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceAdl.PrivatelinkEndpointServiceAdlConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/privatelink_endpoint_service_adl#id PrivatelinkEndpointServiceAdl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



