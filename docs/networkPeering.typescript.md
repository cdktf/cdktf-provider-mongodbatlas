# `networkPeering` Submodule <a name="`networkPeering` Submodule" id="@cdktf/provider-mongodbatlas.networkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkPeering <a name="NetworkPeering" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering mongodbatlas_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer"></a>

```typescript
import { networkPeering } from '@cdktf/provider-mongodbatlas'

new networkPeering.NetworkPeering(scope: Construct, id: string, config: NetworkPeeringConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig">NetworkPeeringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig">NetworkPeeringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAccepterRegionName">resetAccepterRegionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasCidrBlock">resetAtlasCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasGcpProjectId">resetAtlasGcpProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasVpcName">resetAtlasVpcName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAzureDirectoryId">resetAzureDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAzureSubscriptionId">resetAzureSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetGcpProjectId">resetGcpProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetNetworkName">resetNetworkName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetResourceGroupName">resetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetRouteTableCidrBlock">resetRouteTableCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetVnetName">resetVnetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccepterRegionName` <a name="resetAccepterRegionName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAccepterRegionName"></a>

```typescript
public resetAccepterRegionName(): void
```

##### `resetAtlasCidrBlock` <a name="resetAtlasCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasCidrBlock"></a>

```typescript
public resetAtlasCidrBlock(): void
```

##### `resetAtlasGcpProjectId` <a name="resetAtlasGcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasGcpProjectId"></a>

```typescript
public resetAtlasGcpProjectId(): void
```

##### `resetAtlasVpcName` <a name="resetAtlasVpcName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasVpcName"></a>

```typescript
public resetAtlasVpcName(): void
```

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAwsAccountId"></a>

```typescript
public resetAwsAccountId(): void
```

##### `resetAzureDirectoryId` <a name="resetAzureDirectoryId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAzureDirectoryId"></a>

```typescript
public resetAzureDirectoryId(): void
```

##### `resetAzureSubscriptionId` <a name="resetAzureSubscriptionId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAzureSubscriptionId"></a>

```typescript
public resetAzureSubscriptionId(): void
```

##### `resetGcpProjectId` <a name="resetGcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetGcpProjectId"></a>

```typescript
public resetGcpProjectId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetworkName` <a name="resetNetworkName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetNetworkName"></a>

```typescript
public resetNetworkName(): void
```

##### `resetResourceGroupName` <a name="resetResourceGroupName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetResourceGroupName"></a>

```typescript
public resetResourceGroupName(): void
```

##### `resetRouteTableCidrBlock` <a name="resetRouteTableCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetRouteTableCidrBlock"></a>

```typescript
public resetRouteTableCidrBlock(): void
```

##### `resetVnetName` <a name="resetVnetName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetVnetName"></a>

```typescript
public resetVnetName(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkPeering resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isConstruct"></a>

```typescript
import { networkPeering } from '@cdktf/provider-mongodbatlas'

networkPeering.NetworkPeering.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformElement"></a>

```typescript
import { networkPeering } from '@cdktf/provider-mongodbatlas'

networkPeering.NetworkPeering.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformResource"></a>

```typescript
import { networkPeering } from '@cdktf/provider-mongodbatlas'

networkPeering.NetworkPeering.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport"></a>

```typescript
import { networkPeering } from '@cdktf/provider-mongodbatlas'

networkPeering.NetworkPeering.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkPeering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkPeering to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasId">atlasId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorState">errorState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorStateName">errorStateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.peerId">peerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.statusName">statusName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.accepterRegionNameInput">accepterRegionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasCidrBlockInput">atlasCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasGcpProjectIdInput">atlasGcpProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasVpcNameInput">atlasVpcNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureDirectoryIdInput">azureDirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureSubscriptionIdInput">azureSubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.containerIdInput">containerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.gcpProjectIdInput">gcpProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.networkNameInput">networkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.routeTableCidrBlockInput">routeTableCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vnetNameInput">vnetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.accepterRegionName">accepterRegionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasCidrBlock">atlasCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasGcpProjectId">atlasGcpProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasVpcName">atlasVpcName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureDirectoryId">azureDirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureSubscriptionId">azureSubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.containerId">containerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.gcpProjectId">gcpProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.networkName">networkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.routeTableCidrBlock">routeTableCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vnetName">vnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `atlasId`<sup>Required</sup> <a name="atlasId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasId"></a>

```typescript
public readonly atlasId: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `errorState`<sup>Required</sup> <a name="errorState" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorState"></a>

```typescript
public readonly errorState: string;
```

- *Type:* string

---

##### `errorStateName`<sup>Required</sup> <a name="errorStateName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorStateName"></a>

```typescript
public readonly errorStateName: string;
```

- *Type:* string

---

##### `peerId`<sup>Required</sup> <a name="peerId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.peerId"></a>

```typescript
public readonly peerId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusName`<sup>Required</sup> <a name="statusName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.statusName"></a>

```typescript
public readonly statusName: string;
```

- *Type:* string

---

##### `accepterRegionNameInput`<sup>Optional</sup> <a name="accepterRegionNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.accepterRegionNameInput"></a>

```typescript
public readonly accepterRegionNameInput: string;
```

- *Type:* string

---

##### `atlasCidrBlockInput`<sup>Optional</sup> <a name="atlasCidrBlockInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasCidrBlockInput"></a>

```typescript
public readonly atlasCidrBlockInput: string;
```

- *Type:* string

---

##### `atlasGcpProjectIdInput`<sup>Optional</sup> <a name="atlasGcpProjectIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasGcpProjectIdInput"></a>

```typescript
public readonly atlasGcpProjectIdInput: string;
```

- *Type:* string

---

##### `atlasVpcNameInput`<sup>Optional</sup> <a name="atlasVpcNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasVpcNameInput"></a>

```typescript
public readonly atlasVpcNameInput: string;
```

- *Type:* string

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `azureDirectoryIdInput`<sup>Optional</sup> <a name="azureDirectoryIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureDirectoryIdInput"></a>

```typescript
public readonly azureDirectoryIdInput: string;
```

- *Type:* string

---

##### `azureSubscriptionIdInput`<sup>Optional</sup> <a name="azureSubscriptionIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureSubscriptionIdInput"></a>

```typescript
public readonly azureSubscriptionIdInput: string;
```

- *Type:* string

---

##### `containerIdInput`<sup>Optional</sup> <a name="containerIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.containerIdInput"></a>

```typescript
public readonly containerIdInput: string;
```

- *Type:* string

---

##### `gcpProjectIdInput`<sup>Optional</sup> <a name="gcpProjectIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.gcpProjectIdInput"></a>

```typescript
public readonly gcpProjectIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networkNameInput`<sup>Optional</sup> <a name="networkNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.networkNameInput"></a>

```typescript
public readonly networkNameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `routeTableCidrBlockInput`<sup>Optional</sup> <a name="routeTableCidrBlockInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.routeTableCidrBlockInput"></a>

```typescript
public readonly routeTableCidrBlockInput: string;
```

- *Type:* string

---

##### `vnetNameInput`<sup>Optional</sup> <a name="vnetNameInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vnetNameInput"></a>

```typescript
public readonly vnetNameInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `accepterRegionName`<sup>Required</sup> <a name="accepterRegionName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.accepterRegionName"></a>

```typescript
public readonly accepterRegionName: string;
```

- *Type:* string

---

##### `atlasCidrBlock`<sup>Required</sup> <a name="atlasCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasCidrBlock"></a>

```typescript
public readonly atlasCidrBlock: string;
```

- *Type:* string

---

##### `atlasGcpProjectId`<sup>Required</sup> <a name="atlasGcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasGcpProjectId"></a>

```typescript
public readonly atlasGcpProjectId: string;
```

- *Type:* string

---

##### `atlasVpcName`<sup>Required</sup> <a name="atlasVpcName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasVpcName"></a>

```typescript
public readonly atlasVpcName: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `azureDirectoryId`<sup>Required</sup> <a name="azureDirectoryId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureDirectoryId"></a>

```typescript
public readonly azureDirectoryId: string;
```

- *Type:* string

---

##### `azureSubscriptionId`<sup>Required</sup> <a name="azureSubscriptionId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureSubscriptionId"></a>

```typescript
public readonly azureSubscriptionId: string;
```

- *Type:* string

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.containerId"></a>

```typescript
public readonly containerId: string;
```

- *Type:* string

---

##### `gcpProjectId`<sup>Required</sup> <a name="gcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.gcpProjectId"></a>

```typescript
public readonly gcpProjectId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `routeTableCidrBlock`<sup>Required</sup> <a name="routeTableCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.routeTableCidrBlock"></a>

```typescript
public readonly routeTableCidrBlock: string;
```

- *Type:* string

---

##### `vnetName`<sup>Required</sup> <a name="vnetName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vnetName"></a>

```typescript
public readonly vnetName: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkPeeringConfig <a name="NetworkPeeringConfig" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.Initializer"></a>

```typescript
import { networkPeering } from '@cdktf/provider-mongodbatlas'

const networkPeeringConfig: networkPeering.NetworkPeeringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.containerId">containerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#container_id NetworkPeering#container_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#project_id NetworkPeering#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.providerName">providerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#provider_name NetworkPeering#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.accepterRegionName">accepterRegionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#accepter_region_name NetworkPeering#accepter_region_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasCidrBlock">atlasCidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#atlas_cidr_block NetworkPeering#atlas_cidr_block}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasGcpProjectId">atlasGcpProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#atlas_gcp_project_id NetworkPeering#atlas_gcp_project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasVpcName">atlasVpcName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#atlas_vpc_name NetworkPeering#atlas_vpc_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#aws_account_id NetworkPeering#aws_account_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.azureDirectoryId">azureDirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#azure_directory_id NetworkPeering#azure_directory_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.azureSubscriptionId">azureSubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#azure_subscription_id NetworkPeering#azure_subscription_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.gcpProjectId">gcpProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#gcp_project_id NetworkPeering#gcp_project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#id NetworkPeering#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.networkName">networkName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#network_name NetworkPeering#network_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#resource_group_name NetworkPeering#resource_group_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.routeTableCidrBlock">routeTableCidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#route_table_cidr_block NetworkPeering#route_table_cidr_block}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.vnetName">vnetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#vnet_name NetworkPeering#vnet_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#vpc_id NetworkPeering#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.containerId"></a>

```typescript
public readonly containerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#container_id NetworkPeering#container_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#project_id NetworkPeering#project_id}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#provider_name NetworkPeering#provider_name}.

---

##### `accepterRegionName`<sup>Optional</sup> <a name="accepterRegionName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.accepterRegionName"></a>

```typescript
public readonly accepterRegionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#accepter_region_name NetworkPeering#accepter_region_name}.

---

##### `atlasCidrBlock`<sup>Optional</sup> <a name="atlasCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasCidrBlock"></a>

```typescript
public readonly atlasCidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#atlas_cidr_block NetworkPeering#atlas_cidr_block}.

---

##### `atlasGcpProjectId`<sup>Optional</sup> <a name="atlasGcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasGcpProjectId"></a>

```typescript
public readonly atlasGcpProjectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#atlas_gcp_project_id NetworkPeering#atlas_gcp_project_id}.

---

##### `atlasVpcName`<sup>Optional</sup> <a name="atlasVpcName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasVpcName"></a>

```typescript
public readonly atlasVpcName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#atlas_vpc_name NetworkPeering#atlas_vpc_name}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#aws_account_id NetworkPeering#aws_account_id}.

---

##### `azureDirectoryId`<sup>Optional</sup> <a name="azureDirectoryId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.azureDirectoryId"></a>

```typescript
public readonly azureDirectoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#azure_directory_id NetworkPeering#azure_directory_id}.

---

##### `azureSubscriptionId`<sup>Optional</sup> <a name="azureSubscriptionId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.azureSubscriptionId"></a>

```typescript
public readonly azureSubscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#azure_subscription_id NetworkPeering#azure_subscription_id}.

---

##### `gcpProjectId`<sup>Optional</sup> <a name="gcpProjectId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.gcpProjectId"></a>

```typescript
public readonly gcpProjectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#gcp_project_id NetworkPeering#gcp_project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#id NetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkName`<sup>Optional</sup> <a name="networkName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#network_name NetworkPeering#network_name}.

---

##### `resourceGroupName`<sup>Optional</sup> <a name="resourceGroupName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#resource_group_name NetworkPeering#resource_group_name}.

---

##### `routeTableCidrBlock`<sup>Optional</sup> <a name="routeTableCidrBlock" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.routeTableCidrBlock"></a>

```typescript
public readonly routeTableCidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#route_table_cidr_block NetworkPeering#route_table_cidr_block}.

---

##### `vnetName`<sup>Optional</sup> <a name="vnetName" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.vnetName"></a>

```typescript
public readonly vnetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#vnet_name NetworkPeering#vnet_name}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.27.0/docs/resources/network_peering#vpc_id NetworkPeering#vpc_id}.

---



