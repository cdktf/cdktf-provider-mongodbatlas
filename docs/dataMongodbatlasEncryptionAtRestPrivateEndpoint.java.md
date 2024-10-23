# `dataMongodbatlasEncryptionAtRestPrivateEndpoint` Submodule <a name="`dataMongodbatlasEncryptionAtRestPrivateEndpoint` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasEncryptionAtRestPrivateEndpoint <a name="DataMongodbatlasEncryptionAtRestPrivateEndpoint" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/encryption_at_rest_private_endpoint mongodbatlas_encryption_at_rest_private_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_encryption_at_rest_private_endpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint;

DataMongodbatlasEncryptionAtRestPrivateEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .cloudProvider(java.lang.String)
    .id(java.lang.String)
    .projectId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | Label that identifies the cloud provider of the private endpoint. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Unique 24-hexadecimal digit string that identifies the Private Endpoint Service. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Unique 24-hexadecimal digit string that identifies your project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.cloudProvider"></a>

- *Type:* java.lang.String

Label that identifies the cloud provider of the private endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/encryption_at_rest_private_endpoint#cloud_provider DataMongodbatlasEncryptionAtRestPrivateEndpoint#cloud_provider}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Unique 24-hexadecimal digit string that identifies the Private Endpoint Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/encryption_at_rest_private_endpoint#id DataMongodbatlasEncryptionAtRestPrivateEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Unique 24-hexadecimal digit string that identifies your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/encryption_at_rest_private_endpoint#project_id DataMongodbatlasEncryptionAtRestPrivateEndpoint#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasEncryptionAtRestPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_encryption_at_rest_private_endpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint;

DataMongodbatlasEncryptionAtRestPrivateEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_encryption_at_rest_private_endpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint;

DataMongodbatlasEncryptionAtRestPrivateEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_encryption_at_rest_private_endpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint;

DataMongodbatlasEncryptionAtRestPrivateEndpoint.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_encryption_at_rest_private_endpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint;

DataMongodbatlasEncryptionAtRestPrivateEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataMongodbatlasEncryptionAtRestPrivateEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataMongodbatlasEncryptionAtRestPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataMongodbatlasEncryptionAtRestPrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataMongodbatlasEncryptionAtRestPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/encryption_at_rest_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasEncryptionAtRestPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.privateEndpointConnectionName">privateEndpointConnectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.regionName">regionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.cloudProviderInput">cloudProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `privateEndpointConnectionName`<sup>Required</sup> <a name="privateEndpointConnectionName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.privateEndpointConnectionName"></a>

```java
public java.lang.String getPrivateEndpointConnectionName();
```

- *Type:* java.lang.String

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `cloudProviderInput`<sup>Optional</sup> <a name="cloudProviderInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.cloudProviderInput"></a>

```java
public java.lang.String getCloudProviderInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.cloudProvider"></a>

```java
public java.lang.String getCloudProvider();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasEncryptionAtRestPrivateEndpointConfig <a name="DataMongodbatlasEncryptionAtRestPrivateEndpointConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_encryption_at_rest_private_endpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig;

DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .cloudProvider(java.lang.String)
    .id(java.lang.String)
    .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | Label that identifies the cloud provider of the private endpoint. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Unique 24-hexadecimal digit string that identifies the Private Endpoint Service. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Unique 24-hexadecimal digit string that identifies your project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.cloudProvider"></a>

```java
public java.lang.String getCloudProvider();
```

- *Type:* java.lang.String

Label that identifies the cloud provider of the private endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/encryption_at_rest_private_endpoint#cloud_provider DataMongodbatlasEncryptionAtRestPrivateEndpoint#cloud_provider}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique 24-hexadecimal digit string that identifies the Private Endpoint Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/encryption_at_rest_private_endpoint#id DataMongodbatlasEncryptionAtRestPrivateEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoint.DataMongodbatlasEncryptionAtRestPrivateEndpointConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Unique 24-hexadecimal digit string that identifies your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/encryption_at_rest_private_endpoint#project_id DataMongodbatlasEncryptionAtRestPrivateEndpoint#project_id}

---



