# `dataMongodbatlasGlobalClusterConfig` Submodule <a name="`dataMongodbatlasGlobalClusterConfig` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasGlobalClusterConfig <a name="DataMongodbatlasGlobalClusterConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config mongodbatlas_global_cluster_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_global_cluster_config.DataMongodbatlasGlobalClusterConfig;

DataMongodbatlasGlobalClusterConfig.Builder.create(Construct scope, java.lang.String id)
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
    .clusterName(java.lang.String)
    .projectId(java.lang.String)
//  .id(java.lang.String)
//  .managedNamespaces(IResolvable)
//  .managedNamespaces(java.util.List<DataMongodbatlasGlobalClusterConfigManagedNamespaces>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#cluster_name DataMongodbatlasGlobalClusterConfig#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#project_id DataMongodbatlasGlobalClusterConfig#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#id DataMongodbatlasGlobalClusterConfig#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.managedNamespaces">managedNamespaces</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces">DataMongodbatlasGlobalClusterConfigManagedNamespaces</a>></code> | managed_namespaces block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#cluster_name DataMongodbatlasGlobalClusterConfig#cluster_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#project_id DataMongodbatlasGlobalClusterConfig#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#id DataMongodbatlasGlobalClusterConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedNamespaces`<sup>Optional</sup> <a name="managedNamespaces" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.Initializer.parameter.managedNamespaces"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces">DataMongodbatlasGlobalClusterConfigManagedNamespaces</a>>

managed_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#managed_namespaces DataMongodbatlasGlobalClusterConfig#managed_namespaces}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.putManagedNamespaces">putManagedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.resetManagedNamespaces">resetManagedNamespaces</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putManagedNamespaces` <a name="putManagedNamespaces" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.putManagedNamespaces"></a>

```java
public void putManagedNamespaces(IResolvable OR java.util.List<DataMongodbatlasGlobalClusterConfigManagedNamespaces> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.putManagedNamespaces.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces">DataMongodbatlasGlobalClusterConfigManagedNamespaces</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.resetId"></a>

```java
public void resetId()
```

##### `resetManagedNamespaces` <a name="resetManagedNamespaces" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.resetManagedNamespaces"></a>

```java
public void resetManagedNamespaces()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasGlobalClusterConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_global_cluster_config.DataMongodbatlasGlobalClusterConfig;

DataMongodbatlasGlobalClusterConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_global_cluster_config.DataMongodbatlasGlobalClusterConfig;

DataMongodbatlasGlobalClusterConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_global_cluster_config.DataMongodbatlasGlobalClusterConfig;

DataMongodbatlasGlobalClusterConfig.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_global_cluster_config.DataMongodbatlasGlobalClusterConfig;

DataMongodbatlasGlobalClusterConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataMongodbatlasGlobalClusterConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataMongodbatlasGlobalClusterConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataMongodbatlasGlobalClusterConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataMongodbatlasGlobalClusterConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasGlobalClusterConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.customZoneMapping">customZoneMapping</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.customZoneMappingZoneId">customZoneMappingZoneId</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.managedNamespaces">managedNamespaces</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList">DataMongodbatlasGlobalClusterConfigManagedNamespacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.managedNamespacesInput">managedNamespacesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces">DataMongodbatlasGlobalClusterConfigManagedNamespaces</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `customZoneMapping`<sup>Required</sup> <a name="customZoneMapping" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.customZoneMapping"></a>

```java
public StringMap getCustomZoneMapping();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `customZoneMappingZoneId`<sup>Required</sup> <a name="customZoneMappingZoneId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.customZoneMappingZoneId"></a>

```java
public StringMap getCustomZoneMappingZoneId();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `managedNamespaces`<sup>Required</sup> <a name="managedNamespaces" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.managedNamespaces"></a>

```java
public DataMongodbatlasGlobalClusterConfigManagedNamespacesList getManagedNamespaces();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList">DataMongodbatlasGlobalClusterConfigManagedNamespacesList</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedNamespacesInput`<sup>Optional</sup> <a name="managedNamespacesInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.managedNamespacesInput"></a>

```java
public java.lang.Object getManagedNamespacesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces">DataMongodbatlasGlobalClusterConfigManagedNamespaces</a>>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasGlobalClusterConfigConfig <a name="DataMongodbatlasGlobalClusterConfigConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_global_cluster_config.DataMongodbatlasGlobalClusterConfigConfig;

DataMongodbatlasGlobalClusterConfigConfig.builder()
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
    .clusterName(java.lang.String)
    .projectId(java.lang.String)
//  .id(java.lang.String)
//  .managedNamespaces(IResolvable)
//  .managedNamespaces(java.util.List<DataMongodbatlasGlobalClusterConfigManagedNamespaces>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#cluster_name DataMongodbatlasGlobalClusterConfig#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#project_id DataMongodbatlasGlobalClusterConfig#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#id DataMongodbatlasGlobalClusterConfig#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.managedNamespaces">managedNamespaces</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces">DataMongodbatlasGlobalClusterConfigManagedNamespaces</a>></code> | managed_namespaces block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#cluster_name DataMongodbatlasGlobalClusterConfig#cluster_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#project_id DataMongodbatlasGlobalClusterConfig#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#id DataMongodbatlasGlobalClusterConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedNamespaces`<sup>Optional</sup> <a name="managedNamespaces" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigConfig.property.managedNamespaces"></a>

```java
public java.lang.Object getManagedNamespaces();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces">DataMongodbatlasGlobalClusterConfigManagedNamespaces</a>>

managed_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#managed_namespaces DataMongodbatlasGlobalClusterConfig#managed_namespaces}

---

### DataMongodbatlasGlobalClusterConfigManagedNamespaces <a name="DataMongodbatlasGlobalClusterConfigManagedNamespaces" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_global_cluster_config.DataMongodbatlasGlobalClusterConfigManagedNamespaces;

DataMongodbatlasGlobalClusterConfigManagedNamespaces.builder()
    .collection(java.lang.String)
    .customShardKey(java.lang.String)
    .db(java.lang.String)
//  .isCustomShardKeyHashed(java.lang.Boolean)
//  .isCustomShardKeyHashed(IResolvable)
//  .isShardKeyUnique(java.lang.Boolean)
//  .isShardKeyUnique(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.collection">collection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#collection DataMongodbatlasGlobalClusterConfig#collection}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.customShardKey">customShardKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#custom_shard_key DataMongodbatlasGlobalClusterConfig#custom_shard_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.db">db</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#db DataMongodbatlasGlobalClusterConfig#db}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.isCustomShardKeyHashed">isCustomShardKeyHashed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#is_custom_shard_key_hashed DataMongodbatlasGlobalClusterConfig#is_custom_shard_key_hashed}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.isShardKeyUnique">isShardKeyUnique</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#is_shard_key_unique DataMongodbatlasGlobalClusterConfig#is_shard_key_unique}. |

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.collection"></a>

```java
public java.lang.String getCollection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#collection DataMongodbatlasGlobalClusterConfig#collection}.

---

##### `customShardKey`<sup>Required</sup> <a name="customShardKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.customShardKey"></a>

```java
public java.lang.String getCustomShardKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#custom_shard_key DataMongodbatlasGlobalClusterConfig#custom_shard_key}.

---

##### `db`<sup>Required</sup> <a name="db" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.db"></a>

```java
public java.lang.String getDb();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#db DataMongodbatlasGlobalClusterConfig#db}.

---

##### `isCustomShardKeyHashed`<sup>Optional</sup> <a name="isCustomShardKeyHashed" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.isCustomShardKeyHashed"></a>

```java
public java.lang.Object getIsCustomShardKeyHashed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#is_custom_shard_key_hashed DataMongodbatlasGlobalClusterConfig#is_custom_shard_key_hashed}.

---

##### `isShardKeyUnique`<sup>Optional</sup> <a name="isShardKeyUnique" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces.property.isShardKeyUnique"></a>

```java
public java.lang.Object getIsShardKeyUnique();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/global_cluster_config#is_shard_key_unique DataMongodbatlasGlobalClusterConfig#is_shard_key_unique}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasGlobalClusterConfigManagedNamespacesList <a name="DataMongodbatlasGlobalClusterConfigManagedNamespacesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_global_cluster_config.DataMongodbatlasGlobalClusterConfigManagedNamespacesList;

new DataMongodbatlasGlobalClusterConfigManagedNamespacesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.get"></a>

```java
public DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces">DataMongodbatlasGlobalClusterConfigManagedNamespaces</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces">DataMongodbatlasGlobalClusterConfigManagedNamespaces</a>>

---


### DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference <a name="DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_global_cluster_config.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference;

new DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.resetIsCustomShardKeyHashed">resetIsCustomShardKeyHashed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.resetIsShardKeyUnique">resetIsShardKeyUnique</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsCustomShardKeyHashed` <a name="resetIsCustomShardKeyHashed" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.resetIsCustomShardKeyHashed"></a>

```java
public void resetIsCustomShardKeyHashed()
```

##### `resetIsShardKeyUnique` <a name="resetIsShardKeyUnique" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.resetIsShardKeyUnique"></a>

```java
public void resetIsShardKeyUnique()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.collectionInput">collectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.customShardKeyInput">customShardKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.dbInput">dbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashedInput">isCustomShardKeyHashedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUniqueInput">isShardKeyUniqueInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.collection">collection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.customShardKey">customShardKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.db">db</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashed">isCustomShardKeyHashed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUnique">isShardKeyUnique</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces">DataMongodbatlasGlobalClusterConfigManagedNamespaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `collectionInput`<sup>Optional</sup> <a name="collectionInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.collectionInput"></a>

```java
public java.lang.String getCollectionInput();
```

- *Type:* java.lang.String

---

##### `customShardKeyInput`<sup>Optional</sup> <a name="customShardKeyInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.customShardKeyInput"></a>

```java
public java.lang.String getCustomShardKeyInput();
```

- *Type:* java.lang.String

---

##### `dbInput`<sup>Optional</sup> <a name="dbInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.dbInput"></a>

```java
public java.lang.String getDbInput();
```

- *Type:* java.lang.String

---

##### `isCustomShardKeyHashedInput`<sup>Optional</sup> <a name="isCustomShardKeyHashedInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashedInput"></a>

```java
public java.lang.Object getIsCustomShardKeyHashedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isShardKeyUniqueInput`<sup>Optional</sup> <a name="isShardKeyUniqueInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUniqueInput"></a>

```java
public java.lang.Object getIsShardKeyUniqueInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.collection"></a>

```java
public java.lang.String getCollection();
```

- *Type:* java.lang.String

---

##### `customShardKey`<sup>Required</sup> <a name="customShardKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.customShardKey"></a>

```java
public java.lang.String getCustomShardKey();
```

- *Type:* java.lang.String

---

##### `db`<sup>Required</sup> <a name="db" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.db"></a>

```java
public java.lang.String getDb();
```

- *Type:* java.lang.String

---

##### `isCustomShardKeyHashed`<sup>Required</sup> <a name="isCustomShardKeyHashed" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashed"></a>

```java
public java.lang.Object getIsCustomShardKeyHashed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isShardKeyUnique`<sup>Required</sup> <a name="isShardKeyUnique" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUnique"></a>

```java
public java.lang.Object getIsShardKeyUnique();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespacesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasGlobalClusterConfig.DataMongodbatlasGlobalClusterConfigManagedNamespaces">DataMongodbatlasGlobalClusterConfigManagedNamespaces</a>

---



