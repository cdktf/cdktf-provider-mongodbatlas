# `mongodbatlas_cloud_provider_access_authorization`

Refer to the Terraform Registory for docs: [`mongodbatlas_cloud_provider_access_authorization`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/cloud_provider_access_authorization).

# `cloudProviderAccessAuthorization` Submodule <a name="`cloudProviderAccessAuthorization` Submodule" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudProviderAccessAuthorization <a name="CloudProviderAccessAuthorization" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/cloud_provider_access_authorization mongodbatlas_cloud_provider_access_authorization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.Initializer"></a>

```typescript
import { cloudProviderAccessAuthorization } from '@cdktf/provider-mongodbatlas'

new cloudProviderAccessAuthorization.CloudProviderAccessAuthorization(scope: Construct, id: string, config: CloudProviderAccessAuthorizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig">CloudProviderAccessAuthorizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig">CloudProviderAccessAuthorizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.putAws">putAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.resetAws">resetAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAws` <a name="putAws" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.putAws"></a>

```typescript
public putAws(value: CloudProviderAccessAuthorizationAws): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws">CloudProviderAccessAuthorizationAws</a>

---

##### `resetAws` <a name="resetAws" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.resetAws"></a>

```typescript
public resetAws(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.isConstruct"></a>

```typescript
import { cloudProviderAccessAuthorization } from '@cdktf/provider-mongodbatlas'

cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.isTerraformElement"></a>

```typescript
import { cloudProviderAccessAuthorization } from '@cdktf/provider-mongodbatlas'

cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.isTerraformResource"></a>

```typescript
import { cloudProviderAccessAuthorization } from '@cdktf/provider-mongodbatlas'

cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.authorizedDate">authorizedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference">CloudProviderAccessAuthorizationAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.featureUsages">featureUsages</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList">CloudProviderAccessAuthorizationFeatureUsagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.awsInput">awsInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws">CloudProviderAccessAuthorizationAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.roleIdInput">roleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorizedDate`<sup>Required</sup> <a name="authorizedDate" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.authorizedDate"></a>

```typescript
public readonly authorizedDate: string;
```

- *Type:* string

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.aws"></a>

```typescript
public readonly aws: CloudProviderAccessAuthorizationAwsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference">CloudProviderAccessAuthorizationAwsOutputReference</a>

---

##### `featureUsages`<sup>Required</sup> <a name="featureUsages" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.featureUsages"></a>

```typescript
public readonly featureUsages: CloudProviderAccessAuthorizationFeatureUsagesList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList">CloudProviderAccessAuthorizationFeatureUsagesList</a>

---

##### `awsInput`<sup>Optional</sup> <a name="awsInput" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.awsInput"></a>

```typescript
public readonly awsInput: CloudProviderAccessAuthorizationAws;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws">CloudProviderAccessAuthorizationAws</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `roleIdInput`<sup>Optional</sup> <a name="roleIdInput" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.roleIdInput"></a>

```typescript
public readonly roleIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudProviderAccessAuthorizationAws <a name="CloudProviderAccessAuthorizationAws" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws.Initializer"></a>

```typescript
import { cloudProviderAccessAuthorization } from '@cdktf/provider-mongodbatlas'

const cloudProviderAccessAuthorizationAws: cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws.property.iamAssumedRoleArn">iamAssumedRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/cloud_provider_access_authorization#iam_assumed_role_arn CloudProviderAccessAuthorization#iam_assumed_role_arn}. |

---

##### `iamAssumedRoleArn`<sup>Required</sup> <a name="iamAssumedRoleArn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws.property.iamAssumedRoleArn"></a>

```typescript
public readonly iamAssumedRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/cloud_provider_access_authorization#iam_assumed_role_arn CloudProviderAccessAuthorization#iam_assumed_role_arn}.

---

### CloudProviderAccessAuthorizationConfig <a name="CloudProviderAccessAuthorizationConfig" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.Initializer"></a>

```typescript
import { cloudProviderAccessAuthorization } from '@cdktf/provider-mongodbatlas'

const cloudProviderAccessAuthorizationConfig: cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/cloud_provider_access_authorization#project_id CloudProviderAccessAuthorization#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.roleId">roleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/cloud_provider_access_authorization#role_id CloudProviderAccessAuthorization#role_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws">CloudProviderAccessAuthorizationAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/cloud_provider_access_authorization#id CloudProviderAccessAuthorization#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/cloud_provider_access_authorization#project_id CloudProviderAccessAuthorization#project_id}.

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/cloud_provider_access_authorization#role_id CloudProviderAccessAuthorization#role_id}.

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.aws"></a>

```typescript
public readonly aws: CloudProviderAccessAuthorizationAws;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws">CloudProviderAccessAuthorizationAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/cloud_provider_access_authorization#aws CloudProviderAccessAuthorization#aws}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/cloud_provider_access_authorization#id CloudProviderAccessAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CloudProviderAccessAuthorizationFeatureUsages <a name="CloudProviderAccessAuthorizationFeatureUsages" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsages.Initializer"></a>

```typescript
import { cloudProviderAccessAuthorization } from '@cdktf/provider-mongodbatlas'

const cloudProviderAccessAuthorizationFeatureUsages: cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsages = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### CloudProviderAccessAuthorizationAwsOutputReference <a name="CloudProviderAccessAuthorizationAwsOutputReference" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.Initializer"></a>

```typescript
import { cloudProviderAccessAuthorization } from '@cdktf/provider-mongodbatlas'

new cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.property.iamAssumedRoleArnInput">iamAssumedRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.property.iamAssumedRoleArn">iamAssumedRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws">CloudProviderAccessAuthorizationAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iamAssumedRoleArnInput`<sup>Optional</sup> <a name="iamAssumedRoleArnInput" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.property.iamAssumedRoleArnInput"></a>

```typescript
public readonly iamAssumedRoleArnInput: string;
```

- *Type:* string

---

##### `iamAssumedRoleArn`<sup>Required</sup> <a name="iamAssumedRoleArn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.property.iamAssumedRoleArn"></a>

```typescript
public readonly iamAssumedRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAwsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudProviderAccessAuthorizationAws;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationAws">CloudProviderAccessAuthorizationAws</a>

---


### CloudProviderAccessAuthorizationFeatureUsagesList <a name="CloudProviderAccessAuthorizationFeatureUsagesList" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.Initializer"></a>

```typescript
import { cloudProviderAccessAuthorization } from '@cdktf/provider-mongodbatlas'

new cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.get"></a>

```typescript
public get(index: number): CloudProviderAccessAuthorizationFeatureUsagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudProviderAccessAuthorizationFeatureUsagesOutputReference <a name="CloudProviderAccessAuthorizationFeatureUsagesOutputReference" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.Initializer"></a>

```typescript
import { cloudProviderAccessAuthorization } from '@cdktf/provider-mongodbatlas'

new cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.property.featureId">featureId</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.property.featureType">featureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsages">CloudProviderAccessAuthorizationFeatureUsages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `featureId`<sup>Required</sup> <a name="featureId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.property.featureId"></a>

```typescript
public readonly featureId: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `featureType`<sup>Required</sup> <a name="featureType" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.property.featureType"></a>

```typescript
public readonly featureType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudProviderAccessAuthorizationFeatureUsages;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessAuthorization.CloudProviderAccessAuthorizationFeatureUsages">CloudProviderAccessAuthorizationFeatureUsages</a>

---



