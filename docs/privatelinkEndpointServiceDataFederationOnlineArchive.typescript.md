# `privatelinkEndpointServiceDataFederationOnlineArchive` Submodule <a name="`privatelinkEndpointServiceDataFederationOnlineArchive` Submodule" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivatelinkEndpointServiceDataFederationOnlineArchive <a name="PrivatelinkEndpointServiceDataFederationOnlineArchive" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive mongodbatlas_privatelink_endpoint_service_data_federation_online_archive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer"></a>

```typescript
import { privatelinkEndpointServiceDataFederationOnlineArchive } from '@cdktf/provider-mongodbatlas'

new privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive(scope: Construct, id: string, config: PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig">PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig">PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetCustomerEndpointDnsName">resetCustomerEndpointDnsName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.putTimeouts"></a>

```typescript
public putTimeouts(value: PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts">PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetCustomerEndpointDnsName` <a name="resetCustomerEndpointDnsName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetCustomerEndpointDnsName"></a>

```typescript
public resetCustomerEndpointDnsName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrivatelinkEndpointServiceDataFederationOnlineArchive resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isConstruct"></a>

```typescript
import { privatelinkEndpointServiceDataFederationOnlineArchive } from '@cdktf/provider-mongodbatlas'

privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformElement"></a>

```typescript
import { privatelinkEndpointServiceDataFederationOnlineArchive } from '@cdktf/provider-mongodbatlas'

privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformResource"></a>

```typescript
import { privatelinkEndpointServiceDataFederationOnlineArchive } from '@cdktf/provider-mongodbatlas'

privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.generateConfigForImport"></a>

```typescript
import { privatelinkEndpointServiceDataFederationOnlineArchive } from '@cdktf/provider-mongodbatlas'

privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PrivatelinkEndpointServiceDataFederationOnlineArchive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivatelinkEndpointServiceDataFederationOnlineArchive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivatelinkEndpointServiceDataFederationOnlineArchive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivatelinkEndpointServiceDataFederationOnlineArchive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference">PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.customerEndpointDnsNameInput">customerEndpointDnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.endpointIdInput">endpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts">PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.customerEndpointDnsName">customerEndpointDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.timeouts"></a>

```typescript
public readonly timeouts: PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference">PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `customerEndpointDnsNameInput`<sup>Optional</sup> <a name="customerEndpointDnsNameInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.customerEndpointDnsNameInput"></a>

```typescript
public readonly customerEndpointDnsNameInput: string;
```

- *Type:* string

---

##### `endpointIdInput`<sup>Optional</sup> <a name="endpointIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.endpointIdInput"></a>

```typescript
public readonly endpointIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts">PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `customerEndpointDnsName`<sup>Required</sup> <a name="customerEndpointDnsName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.customerEndpointDnsName"></a>

```typescript
public readonly customerEndpointDnsName: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchive.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig <a name="PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.Initializer"></a>

```typescript
import { privatelinkEndpointServiceDataFederationOnlineArchive } from '@cdktf/provider-mongodbatlas'

const privatelinkEndpointServiceDataFederationOnlineArchiveConfig: privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.endpointId">endpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#endpoint_id PrivatelinkEndpointServiceDataFederationOnlineArchive#endpoint_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#project_id PrivatelinkEndpointServiceDataFederationOnlineArchive#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.providerName">providerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#provider_name PrivatelinkEndpointServiceDataFederationOnlineArchive#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#comment PrivatelinkEndpointServiceDataFederationOnlineArchive#comment}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.customerEndpointDnsName">customerEndpointDnsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#customer_endpoint_dns_name PrivatelinkEndpointServiceDataFederationOnlineArchive#customer_endpoint_dns_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#id PrivatelinkEndpointServiceDataFederationOnlineArchive#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#region PrivatelinkEndpointServiceDataFederationOnlineArchive#region}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts">PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#endpoint_id PrivatelinkEndpointServiceDataFederationOnlineArchive#endpoint_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#project_id PrivatelinkEndpointServiceDataFederationOnlineArchive#project_id}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#provider_name PrivatelinkEndpointServiceDataFederationOnlineArchive#provider_name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#comment PrivatelinkEndpointServiceDataFederationOnlineArchive#comment}.

---

##### `customerEndpointDnsName`<sup>Optional</sup> <a name="customerEndpointDnsName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.customerEndpointDnsName"></a>

```typescript
public readonly customerEndpointDnsName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#customer_endpoint_dns_name PrivatelinkEndpointServiceDataFederationOnlineArchive#customer_endpoint_dns_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#id PrivatelinkEndpointServiceDataFederationOnlineArchive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#region PrivatelinkEndpointServiceDataFederationOnlineArchive#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts">PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#timeouts PrivatelinkEndpointServiceDataFederationOnlineArchive#timeouts}

---

### PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts <a name="PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts.Initializer"></a>

```typescript
import { privatelinkEndpointServiceDataFederationOnlineArchive } from '@cdktf/provider-mongodbatlas'

const privatelinkEndpointServiceDataFederationOnlineArchiveTimeouts: privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#create PrivatelinkEndpointServiceDataFederationOnlineArchive#create}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#delete PrivatelinkEndpointServiceDataFederationOnlineArchive#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#create PrivatelinkEndpointServiceDataFederationOnlineArchive#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/resources/privatelink_endpoint_service_data_federation_online_archive#delete PrivatelinkEndpointServiceDataFederationOnlineArchive#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference <a name="PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.Initializer"></a>

```typescript
import { privatelinkEndpointServiceDataFederationOnlineArchive } from '@cdktf/provider-mongodbatlas'

new privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts">PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceDataFederationOnlineArchive.PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts">PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts</a>

---



