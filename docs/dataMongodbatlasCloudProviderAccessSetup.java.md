# `dataMongodbatlasCloudProviderAccessSetup` Submodule <a name="`dataMongodbatlasCloudProviderAccessSetup` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasCloudProviderAccessSetup <a name="DataMongodbatlasCloudProviderAccessSetup" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/cloud_provider_access_setup mongodbatlas_cloud_provider_access_setup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_provider_access_setup.DataMongodbatlasCloudProviderAccessSetup;

DataMongodbatlasCloudProviderAccessSetup.Builder.create(Construct scope, java.lang.String id)
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
    .projectId(java.lang.String)
    .providerName(java.lang.String)
    .roleId(java.lang.String)
//  .azureConfig(IResolvable)
//  .azureConfig(java.util.List<DataMongodbatlasCloudProviderAccessSetupAzureConfig>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/cloud_provider_access_setup#project_id DataMongodbatlasCloudProviderAccessSetup#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/cloud_provider_access_setup#provider_name DataMongodbatlasCloudProviderAccessSetup#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.roleId">roleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/cloud_provider_access_setup#role_id DataMongodbatlasCloudProviderAccessSetup#role_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.azureConfig">azureConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig">DataMongodbatlasCloudProviderAccessSetupAzureConfig</a>></code> | azure_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/cloud_provider_access_setup#id DataMongodbatlasCloudProviderAccessSetup#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/cloud_provider_access_setup#project_id DataMongodbatlasCloudProviderAccessSetup#project_id}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.providerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/cloud_provider_access_setup#provider_name DataMongodbatlasCloudProviderAccessSetup#provider_name}.

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.roleId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/cloud_provider_access_setup#role_id DataMongodbatlasCloudProviderAccessSetup#role_id}.

---

##### `azureConfig`<sup>Optional</sup> <a name="azureConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.azureConfig"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig">DataMongodbatlasCloudProviderAccessSetupAzureConfig</a>>

azure_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/cloud_provider_access_setup#azure_config DataMongodbatlasCloudProviderAccessSetup#azure_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/cloud_provider_access_setup#id DataMongodbatlasCloudProviderAccessSetup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.putAzureConfig">putAzureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.resetAzureConfig">resetAzureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAzureConfig` <a name="putAzureConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.putAzureConfig"></a>

```java
public void putAzureConfig(IResolvable OR java.util.List<DataMongodbatlasCloudProviderAccessSetupAzureConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.putAzureConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig">DataMongodbatlasCloudProviderAccessSetupAzureConfig</a>>

---

##### `resetAzureConfig` <a name="resetAzureConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.resetAzureConfig"></a>

```java
public void resetAzureConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasCloudProviderAccessSetup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_provider_access_setup.DataMongodbatlasCloudProviderAccessSetup;

DataMongodbatlasCloudProviderAccessSetup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_provider_access_setup.DataMongodbatlasCloudProviderAccessSetup;

DataMongodbatlasCloudProviderAccessSetup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_provider_access_setup.DataMongodbatlasCloudProviderAccessSetup;

DataMongodbatlasCloudProviderAccessSetup.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_provider_access_setup.DataMongodbatlasCloudProviderAccessSetup;

DataMongodbatlasCloudProviderAccessSetup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataMongodbatlasCloudProviderAccessSetup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataMongodbatlasCloudProviderAccessSetup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataMongodbatlasCloudProviderAccessSetup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataMongodbatlasCloudProviderAccessSetup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/cloud_provider_access_setup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasCloudProviderAccessSetup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.aws">aws</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.awsConfig">awsConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList">DataMongodbatlasCloudProviderAccessSetupAwsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.azureConfig">azureConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList">DataMongodbatlasCloudProviderAccessSetupAzureConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.createdDate">createdDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.azureConfigInput">azureConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig">DataMongodbatlasCloudProviderAccessSetupAzureConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.providerNameInput">providerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.roleIdInput">roleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.roleId">roleId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.aws"></a>

```java
public StringMap getAws();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `awsConfig`<sup>Required</sup> <a name="awsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.awsConfig"></a>

```java
public DataMongodbatlasCloudProviderAccessSetupAwsConfigList getAwsConfig();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList">DataMongodbatlasCloudProviderAccessSetupAwsConfigList</a>

---

##### `azureConfig`<sup>Required</sup> <a name="azureConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.azureConfig"></a>

```java
public DataMongodbatlasCloudProviderAccessSetupAzureConfigList getAzureConfig();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList">DataMongodbatlasCloudProviderAccessSetupAzureConfigList</a>

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.createdDate"></a>

```java
public java.lang.String getCreatedDate();
```

- *Type:* java.lang.String

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.lastUpdatedDate"></a>

```java
public java.lang.String getLastUpdatedDate();
```

- *Type:* java.lang.String

---

##### `azureConfigInput`<sup>Optional</sup> <a name="azureConfigInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.azureConfigInput"></a>

```java
public java.lang.Object getAzureConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig">DataMongodbatlasCloudProviderAccessSetupAzureConfig</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.providerNameInput"></a>

```java
public java.lang.String getProviderNameInput();
```

- *Type:* java.lang.String

---

##### `roleIdInput`<sup>Optional</sup> <a name="roleIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.roleIdInput"></a>

```java
public java.lang.String getRoleIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasCloudProviderAccessSetupAwsConfig <a name="DataMongodbatlasCloudProviderAccessSetupAwsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_provider_access_setup.DataMongodbatlasCloudProviderAccessSetupAwsConfig;

DataMongodbatlasCloudProviderAccessSetupAwsConfig.builder()
    .build();
```


### DataMongodbatlasCloudProviderAccessSetupAzureConfig <a name="DataMongodbatlasCloudProviderAccessSetupAzureConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_provider_access_setup.DataMongodbatlasCloudProviderAccessSetupAzureConfig;

DataMongodbatlasCloudProviderAccessSetupAzureConfig.builder()
    .build();
```


### DataMongodbatlasCloudProviderAccessSetupConfig <a name="DataMongodbatlasCloudProviderAccessSetupConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_provider_access_setup.DataMongodbatlasCloudProviderAccessSetupConfig;

DataMongodbatlasCloudProviderAccessSetupConfig.builder()
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
    .projectId(java.lang.String)
    .providerName(java.lang.String)
    .roleId(java.lang.String)
//  .azureConfig(IResolvable)
//  .azureConfig(java.util.List<DataMongodbatlasCloudProviderAccessSetupAzureConfig>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/cloud_provider_access_setup#project_id DataMongodbatlasCloudProviderAccessSetup#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/cloud_provider_access_setup#provider_name DataMongodbatlasCloudProviderAccessSetup#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.roleId">roleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/cloud_provider_access_setup#role_id DataMongodbatlasCloudProviderAccessSetup#role_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.azureConfig">azureConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig">DataMongodbatlasCloudProviderAccessSetupAzureConfig</a>></code> | azure_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/cloud_provider_access_setup#id DataMongodbatlasCloudProviderAccessSetup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/cloud_provider_access_setup#project_id DataMongodbatlasCloudProviderAccessSetup#project_id}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/cloud_provider_access_setup#provider_name DataMongodbatlasCloudProviderAccessSetup#provider_name}.

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/cloud_provider_access_setup#role_id DataMongodbatlasCloudProviderAccessSetup#role_id}.

---

##### `azureConfig`<sup>Optional</sup> <a name="azureConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.azureConfig"></a>

```java
public java.lang.Object getAzureConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig">DataMongodbatlasCloudProviderAccessSetupAzureConfig</a>>

azure_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/cloud_provider_access_setup#azure_config DataMongodbatlasCloudProviderAccessSetup#azure_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/cloud_provider_access_setup#id DataMongodbatlasCloudProviderAccessSetup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasCloudProviderAccessSetupAwsConfigList <a name="DataMongodbatlasCloudProviderAccessSetupAwsConfigList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_provider_access_setup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList;

new DataMongodbatlasCloudProviderAccessSetupAwsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.get"></a>

```java
public DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference <a name="DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_provider_access_setup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference;

new DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.property.atlasAssumedRoleExternalId">atlasAssumedRoleExternalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.property.atlasAwsAccountArn">atlasAwsAccountArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfig">DataMongodbatlasCloudProviderAccessSetupAwsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `atlasAssumedRoleExternalId`<sup>Required</sup> <a name="atlasAssumedRoleExternalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.property.atlasAssumedRoleExternalId"></a>

```java
public java.lang.String getAtlasAssumedRoleExternalId();
```

- *Type:* java.lang.String

---

##### `atlasAwsAccountArn`<sup>Required</sup> <a name="atlasAwsAccountArn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.property.atlasAwsAccountArn"></a>

```java
public java.lang.String getAtlasAwsAccountArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasCloudProviderAccessSetupAwsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAwsConfig">DataMongodbatlasCloudProviderAccessSetupAwsConfig</a>

---


### DataMongodbatlasCloudProviderAccessSetupAzureConfigList <a name="DataMongodbatlasCloudProviderAccessSetupAzureConfigList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_provider_access_setup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList;

new DataMongodbatlasCloudProviderAccessSetupAzureConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.get"></a>

```java
public DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig">DataMongodbatlasCloudProviderAccessSetupAzureConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig">DataMongodbatlasCloudProviderAccessSetupAzureConfig</a>>

---


### DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference <a name="DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_cloud_provider_access_setup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference;

new DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.atlasAzureAppId">atlasAzureAppId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig">DataMongodbatlasCloudProviderAccessSetupAzureConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `atlasAzureAppId`<sup>Required</sup> <a name="atlasAzureAppId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.atlasAzureAppId"></a>

```java
public java.lang.String getAtlasAzureAppId();
```

- *Type:* java.lang.String

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.servicePrincipalId"></a>

```java
public java.lang.String getServicePrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasCloudProviderAccessSetup.DataMongodbatlasCloudProviderAccessSetupAzureConfig">DataMongodbatlasCloudProviderAccessSetupAzureConfig</a>

---



