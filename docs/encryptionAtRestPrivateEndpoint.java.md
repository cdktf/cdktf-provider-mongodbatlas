# `encryptionAtRestPrivateEndpoint` Submodule <a name="`encryptionAtRestPrivateEndpoint` Submodule" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EncryptionAtRestPrivateEndpoint <a name="EncryptionAtRestPrivateEndpoint" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest_private_endpoint mongodbatlas_encryption_at_rest_private_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.encryption_at_rest_private_endpoint.EncryptionAtRestPrivateEndpoint;

EncryptionAtRestPrivateEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cloudProvider(java.lang.String)
    .projectId(java.lang.String)
    .regionName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | Label that identifies the cloud provider for the Encryption At Rest private endpoint. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.regionName">regionName</a></code> | <code>java.lang.String</code> | Cloud provider region in which the Encryption At Rest private endpoint is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.cloudProvider"></a>

- *Type:* java.lang.String

Label that identifies the cloud provider for the Encryption At Rest private endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest_private_endpoint#cloud_provider EncryptionAtRestPrivateEndpoint#cloud_provider}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Unique 24-hexadecimal digit string that identifies your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest_private_endpoint#project_id EncryptionAtRestPrivateEndpoint#project_id}

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.Initializer.parameter.regionName"></a>

- *Type:* java.lang.String

Cloud provider region in which the Encryption At Rest private endpoint is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest_private_endpoint#region_name EncryptionAtRestPrivateEndpoint#region_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EncryptionAtRestPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.encryption_at_rest_private_endpoint.EncryptionAtRestPrivateEndpoint;

EncryptionAtRestPrivateEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.encryption_at_rest_private_endpoint.EncryptionAtRestPrivateEndpoint;

EncryptionAtRestPrivateEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.encryption_at_rest_private_endpoint.EncryptionAtRestPrivateEndpoint;

EncryptionAtRestPrivateEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.encryption_at_rest_private_endpoint.EncryptionAtRestPrivateEndpoint;

EncryptionAtRestPrivateEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EncryptionAtRestPrivateEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a EncryptionAtRestPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EncryptionAtRestPrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EncryptionAtRestPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the EncryptionAtRestPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.privateEndpointConnectionName">privateEndpointConnectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.cloudProviderInput">cloudProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.regionNameInput">regionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.regionName">regionName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `privateEndpointConnectionName`<sup>Required</sup> <a name="privateEndpointConnectionName" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.privateEndpointConnectionName"></a>

```java
public java.lang.String getPrivateEndpointConnectionName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `cloudProviderInput`<sup>Optional</sup> <a name="cloudProviderInput" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.cloudProviderInput"></a>

```java
public java.lang.String getCloudProviderInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `regionNameInput`<sup>Optional</sup> <a name="regionNameInput" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.regionNameInput"></a>

```java
public java.lang.String getRegionNameInput();
```

- *Type:* java.lang.String

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.cloudProvider"></a>

```java
public java.lang.String getCloudProvider();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EncryptionAtRestPrivateEndpointConfig <a name="EncryptionAtRestPrivateEndpointConfig" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.encryption_at_rest_private_endpoint.EncryptionAtRestPrivateEndpointConfig;

EncryptionAtRestPrivateEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cloudProvider(java.lang.String)
    .projectId(java.lang.String)
    .regionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | Label that identifies the cloud provider for the Encryption At Rest private endpoint. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Unique 24-hexadecimal digit string that identifies your project. |
| <code><a href="#@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.regionName">regionName</a></code> | <code>java.lang.String</code> | Cloud provider region in which the Encryption At Rest private endpoint is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.cloudProvider"></a>

```java
public java.lang.String getCloudProvider();
```

- *Type:* java.lang.String

Label that identifies the cloud provider for the Encryption At Rest private endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest_private_endpoint#cloud_provider EncryptionAtRestPrivateEndpoint#cloud_provider}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Unique 24-hexadecimal digit string that identifies your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest_private_endpoint#project_id EncryptionAtRestPrivateEndpoint#project_id}

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-mongodbatlas.encryptionAtRestPrivateEndpoint.EncryptionAtRestPrivateEndpointConfig.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

Cloud provider region in which the Encryption At Rest private endpoint is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/encryption_at_rest_private_endpoint#region_name EncryptionAtRestPrivateEndpoint#region_name}

---



