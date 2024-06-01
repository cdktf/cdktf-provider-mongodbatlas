# `streamConnection` Submodule <a name="`streamConnection` Submodule" id="@cdktf/provider-mongodbatlas.streamConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamConnection <a name="StreamConnection" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection mongodbatlas_stream_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_connection.StreamConnection;

StreamConnection.Builder.create(Construct scope, java.lang.String id)
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
    .connectionName(java.lang.String)
    .instanceName(java.lang.String)
    .projectId(java.lang.String)
    .type(java.lang.String)
//  .authentication(StreamConnectionAuthentication)
//  .bootstrapServers(java.lang.String)
//  .clusterName(java.lang.String)
//  .config(java.util.Map<java.lang.String, java.lang.String>)
//  .dbRoleToExecute(StreamConnectionDbRoleToExecute)
//  .security(StreamConnectionSecurity)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.connectionName">connectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#connection_name StreamConnection#connection_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.instanceName">instanceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#instance_name StreamConnection#instance_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#project_id StreamConnection#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#type StreamConnection#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication">StreamConnectionAuthentication</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#authentication StreamConnection#authentication}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.bootstrapServers">bootstrapServers</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#bootstrap_servers StreamConnection#bootstrap_servers}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#cluster_name StreamConnection#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.config">config</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#config StreamConnection#config}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.dbRoleToExecute">dbRoleToExecute</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute">StreamConnectionDbRoleToExecute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#db_role_to_execute StreamConnection#db_role_to_execute}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.security">security</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity">StreamConnectionSecurity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#security StreamConnection#security}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.connectionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#connection_name StreamConnection#connection_name}.

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.instanceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#instance_name StreamConnection#instance_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#project_id StreamConnection#project_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#type StreamConnection#type}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.authentication"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication">StreamConnectionAuthentication</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#authentication StreamConnection#authentication}.

---

##### `bootstrapServers`<sup>Optional</sup> <a name="bootstrapServers" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.bootstrapServers"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#bootstrap_servers StreamConnection#bootstrap_servers}.

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#cluster_name StreamConnection#cluster_name}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.config"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#config StreamConnection#config}.

---

##### `dbRoleToExecute`<sup>Optional</sup> <a name="dbRoleToExecute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.dbRoleToExecute"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute">StreamConnectionDbRoleToExecute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#db_role_to_execute StreamConnection#db_role_to_execute}.

---

##### `security`<sup>Optional</sup> <a name="security" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.Initializer.parameter.security"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity">StreamConnectionSecurity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#security StreamConnection#security}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putDbRoleToExecute">putDbRoleToExecute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putSecurity">putSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetAuthentication">resetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetBootstrapServers">resetBootstrapServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetDbRoleToExecute">resetDbRoleToExecute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetSecurity">resetSecurity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthentication` <a name="putAuthentication" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putAuthentication"></a>

```java
public void putAuthentication(StreamConnectionAuthentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication">StreamConnectionAuthentication</a>

---

##### `putDbRoleToExecute` <a name="putDbRoleToExecute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putDbRoleToExecute"></a>

```java
public void putDbRoleToExecute(StreamConnectionDbRoleToExecute value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putDbRoleToExecute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute">StreamConnectionDbRoleToExecute</a>

---

##### `putSecurity` <a name="putSecurity" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putSecurity"></a>

```java
public void putSecurity(StreamConnectionSecurity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.putSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity">StreamConnectionSecurity</a>

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetAuthentication"></a>

```java
public void resetAuthentication()
```

##### `resetBootstrapServers` <a name="resetBootstrapServers" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetBootstrapServers"></a>

```java
public void resetBootstrapServers()
```

##### `resetClusterName` <a name="resetClusterName" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetClusterName"></a>

```java
public void resetClusterName()
```

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetDbRoleToExecute` <a name="resetDbRoleToExecute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetDbRoleToExecute"></a>

```java
public void resetDbRoleToExecute()
```

##### `resetSecurity` <a name="resetSecurity" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.resetSecurity"></a>

```java
public void resetSecurity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StreamConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_connection.StreamConnection;

StreamConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_connection.StreamConnection;

StreamConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_connection.StreamConnection;

StreamConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_connection.StreamConnection;

StreamConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StreamConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StreamConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StreamConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StreamConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StreamConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference">StreamConnectionAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.dbRoleToExecute">dbRoleToExecute</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference">StreamConnectionDbRoleToExecuteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.security">security</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference">StreamConnectionSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.authenticationInput">authenticationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication">StreamConnectionAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.bootstrapServersInput">bootstrapServersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.configInput">configInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.connectionNameInput">connectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.dbRoleToExecuteInput">dbRoleToExecuteInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute">StreamConnectionDbRoleToExecute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.instanceNameInput">instanceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.securityInput">securityInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity">StreamConnectionSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.bootstrapServers">bootstrapServers</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.config">config</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.authentication"></a>

```java
public StreamConnectionAuthenticationOutputReference getAuthentication();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference">StreamConnectionAuthenticationOutputReference</a>

---

##### `dbRoleToExecute`<sup>Required</sup> <a name="dbRoleToExecute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.dbRoleToExecute"></a>

```java
public StreamConnectionDbRoleToExecuteOutputReference getDbRoleToExecute();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference">StreamConnectionDbRoleToExecuteOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.security"></a>

```java
public StreamConnectionSecurityOutputReference getSecurity();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference">StreamConnectionSecurityOutputReference</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.authenticationInput"></a>

```java
public java.lang.Object getAuthenticationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication">StreamConnectionAuthentication</a>

---

##### `bootstrapServersInput`<sup>Optional</sup> <a name="bootstrapServersInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.bootstrapServersInput"></a>

```java
public java.lang.String getBootstrapServersInput();
```

- *Type:* java.lang.String

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.configInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.connectionNameInput"></a>

```java
public java.lang.String getConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `dbRoleToExecuteInput`<sup>Optional</sup> <a name="dbRoleToExecuteInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.dbRoleToExecuteInput"></a>

```java
public java.lang.Object getDbRoleToExecuteInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute">StreamConnectionDbRoleToExecute</a>

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.instanceNameInput"></a>

```java
public java.lang.String getInstanceNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `securityInput`<sup>Optional</sup> <a name="securityInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.securityInput"></a>

```java
public java.lang.Object getSecurityInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity">StreamConnectionSecurity</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.bootstrapServers"></a>

```java
public java.lang.String getBootstrapServers();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.config"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StreamConnectionAuthentication <a name="StreamConnectionAuthentication" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_connection.StreamConnectionAuthentication;

StreamConnectionAuthentication.builder()
//  .mechanism(java.lang.String)
//  .password(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication.property.mechanism">mechanism</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#mechanism StreamConnection#mechanism}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#password StreamConnection#password}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#username StreamConnection#username}. |

---

##### `mechanism`<sup>Optional</sup> <a name="mechanism" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication.property.mechanism"></a>

```java
public java.lang.String getMechanism();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#mechanism StreamConnection#mechanism}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#password StreamConnection#password}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#username StreamConnection#username}.

---

### StreamConnectionConfig <a name="StreamConnectionConfig" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_connection.StreamConnectionConfig;

StreamConnectionConfig.builder()
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
    .connectionName(java.lang.String)
    .instanceName(java.lang.String)
    .projectId(java.lang.String)
    .type(java.lang.String)
//  .authentication(StreamConnectionAuthentication)
//  .bootstrapServers(java.lang.String)
//  .clusterName(java.lang.String)
//  .config(java.util.Map<java.lang.String, java.lang.String>)
//  .dbRoleToExecute(StreamConnectionDbRoleToExecute)
//  .security(StreamConnectionSecurity)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#connection_name StreamConnection#connection_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#instance_name StreamConnection#instance_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#project_id StreamConnection#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#type StreamConnection#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication">StreamConnectionAuthentication</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#authentication StreamConnection#authentication}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.bootstrapServers">bootstrapServers</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#bootstrap_servers StreamConnection#bootstrap_servers}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#cluster_name StreamConnection#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.config">config</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#config StreamConnection#config}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.dbRoleToExecute">dbRoleToExecute</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute">StreamConnectionDbRoleToExecute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#db_role_to_execute StreamConnection#db_role_to_execute}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.security">security</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity">StreamConnectionSecurity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#security StreamConnection#security}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#connection_name StreamConnection#connection_name}.

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#instance_name StreamConnection#instance_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#project_id StreamConnection#project_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#type StreamConnection#type}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.authentication"></a>

```java
public StreamConnectionAuthentication getAuthentication();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication">StreamConnectionAuthentication</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#authentication StreamConnection#authentication}.

---

##### `bootstrapServers`<sup>Optional</sup> <a name="bootstrapServers" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.bootstrapServers"></a>

```java
public java.lang.String getBootstrapServers();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#bootstrap_servers StreamConnection#bootstrap_servers}.

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#cluster_name StreamConnection#cluster_name}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.config"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#config StreamConnection#config}.

---

##### `dbRoleToExecute`<sup>Optional</sup> <a name="dbRoleToExecute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.dbRoleToExecute"></a>

```java
public StreamConnectionDbRoleToExecute getDbRoleToExecute();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute">StreamConnectionDbRoleToExecute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#db_role_to_execute StreamConnection#db_role_to_execute}.

---

##### `security`<sup>Optional</sup> <a name="security" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionConfig.property.security"></a>

```java
public StreamConnectionSecurity getSecurity();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity">StreamConnectionSecurity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#security StreamConnection#security}.

---

### StreamConnectionDbRoleToExecute <a name="StreamConnectionDbRoleToExecute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_connection.StreamConnectionDbRoleToExecute;

StreamConnectionDbRoleToExecute.builder()
    .role(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#role StreamConnection#role}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#type StreamConnection#type}. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#role StreamConnection#role}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#type StreamConnection#type}.

---

### StreamConnectionSecurity <a name="StreamConnectionSecurity" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_connection.StreamConnectionSecurity;

StreamConnectionSecurity.builder()
//  .brokerPublicCertificate(java.lang.String)
//  .protocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity.property.brokerPublicCertificate">brokerPublicCertificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#broker_public_certificate StreamConnection#broker_public_certificate}. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#protocol StreamConnection#protocol}. |

---

##### `brokerPublicCertificate`<sup>Optional</sup> <a name="brokerPublicCertificate" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity.property.brokerPublicCertificate"></a>

```java
public java.lang.String getBrokerPublicCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#broker_public_certificate StreamConnection#broker_public_certificate}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/stream_connection#protocol StreamConnection#protocol}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamConnectionAuthenticationOutputReference <a name="StreamConnectionAuthenticationOutputReference" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_connection.StreamConnectionAuthenticationOutputReference;

new StreamConnectionAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.resetMechanism">resetMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMechanism` <a name="resetMechanism" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.resetMechanism"></a>

```java
public void resetMechanism()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.mechanismInput">mechanismInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.mechanism">mechanism</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication">StreamConnectionAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mechanismInput`<sup>Optional</sup> <a name="mechanismInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.mechanismInput"></a>

```java
public java.lang.String getMechanismInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `mechanism`<sup>Required</sup> <a name="mechanism" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.mechanism"></a>

```java
public java.lang.String getMechanism();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthenticationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionAuthentication">StreamConnectionAuthentication</a>

---


### StreamConnectionDbRoleToExecuteOutputReference <a name="StreamConnectionDbRoleToExecuteOutputReference" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_connection.StreamConnectionDbRoleToExecuteOutputReference;

new StreamConnectionDbRoleToExecuteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute">StreamConnectionDbRoleToExecute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecuteOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionDbRoleToExecute">StreamConnectionDbRoleToExecute</a>

---


### StreamConnectionSecurityOutputReference <a name="StreamConnectionSecurityOutputReference" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.stream_connection.StreamConnectionSecurityOutputReference;

new StreamConnectionSecurityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.resetBrokerPublicCertificate">resetBrokerPublicCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBrokerPublicCertificate` <a name="resetBrokerPublicCertificate" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.resetBrokerPublicCertificate"></a>

```java
public void resetBrokerPublicCertificate()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.brokerPublicCertificateInput">brokerPublicCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.brokerPublicCertificate">brokerPublicCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity">StreamConnectionSecurity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `brokerPublicCertificateInput`<sup>Optional</sup> <a name="brokerPublicCertificateInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.brokerPublicCertificateInput"></a>

```java
public java.lang.String getBrokerPublicCertificateInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `brokerPublicCertificate`<sup>Required</sup> <a name="brokerPublicCertificate" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.brokerPublicCertificate"></a>

```java
public java.lang.String getBrokerPublicCertificate();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurityOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.streamConnection.StreamConnectionSecurity">StreamConnectionSecurity</a>

---



