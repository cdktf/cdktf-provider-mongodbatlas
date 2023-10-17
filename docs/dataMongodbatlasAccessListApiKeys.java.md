# `data_mongodbatlas_access_list_api_keys`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_access_list_api_keys`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/access_list_api_keys).

# `dataMongodbatlasAccessListApiKeys` Submodule <a name="`dataMongodbatlasAccessListApiKeys` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasAccessListApiKeys <a name="DataMongodbatlasAccessListApiKeys" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/access_list_api_keys mongodbatlas_access_list_api_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_access_list_api_keys.DataMongodbatlasAccessListApiKeys;

DataMongodbatlasAccessListApiKeys.Builder.create(Construct scope, java.lang.String id)
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
    .apiKeyId(java.lang.String)
    .orgId(java.lang.String)
//  .id(java.lang.String)
//  .itemsPerPage(java.lang.Number)
//  .pageNum(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.apiKeyId">apiKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/access_list_api_keys#api_key_id DataMongodbatlasAccessListApiKeys#api_key_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/access_list_api_keys#org_id DataMongodbatlasAccessListApiKeys#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/access_list_api_keys#id DataMongodbatlasAccessListApiKeys#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.itemsPerPage">itemsPerPage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/access_list_api_keys#items_per_page DataMongodbatlasAccessListApiKeys#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.pageNum">pageNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/access_list_api_keys#page_num DataMongodbatlasAccessListApiKeys#page_num}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiKeyId`<sup>Required</sup> <a name="apiKeyId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.apiKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/access_list_api_keys#api_key_id DataMongodbatlasAccessListApiKeys#api_key_id}.

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/access_list_api_keys#org_id DataMongodbatlasAccessListApiKeys#org_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/access_list_api_keys#id DataMongodbatlasAccessListApiKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `itemsPerPage`<sup>Optional</sup> <a name="itemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.itemsPerPage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/access_list_api_keys#items_per_page DataMongodbatlasAccessListApiKeys#items_per_page}.

---

##### `pageNum`<sup>Optional</sup> <a name="pageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.Initializer.parameter.pageNum"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/access_list_api_keys#page_num DataMongodbatlasAccessListApiKeys#page_num}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetItemsPerPage">resetItemsPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetPageNum">resetPageNum</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetId"></a>

```java
public void resetId()
```

##### `resetItemsPerPage` <a name="resetItemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetItemsPerPage"></a>

```java
public void resetItemsPerPage()
```

##### `resetPageNum` <a name="resetPageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.resetPageNum"></a>

```java
public void resetPageNum()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasAccessListApiKeys resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_access_list_api_keys.DataMongodbatlasAccessListApiKeys;

DataMongodbatlasAccessListApiKeys.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_access_list_api_keys.DataMongodbatlasAccessListApiKeys;

DataMongodbatlasAccessListApiKeys.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_access_list_api_keys.DataMongodbatlasAccessListApiKeys;

DataMongodbatlasAccessListApiKeys.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_access_list_api_keys.DataMongodbatlasAccessListApiKeys;

DataMongodbatlasAccessListApiKeys.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataMongodbatlasAccessListApiKeys.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataMongodbatlasAccessListApiKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataMongodbatlasAccessListApiKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataMongodbatlasAccessListApiKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/access_list_api_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasAccessListApiKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList">DataMongodbatlasAccessListApiKeysResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.apiKeyIdInput">apiKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.itemsPerPageInput">itemsPerPageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.pageNumInput">pageNumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.apiKeyId">apiKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.itemsPerPage">itemsPerPage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.pageNum">pageNum</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.results"></a>

```java
public DataMongodbatlasAccessListApiKeysResultsList getResults();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList">DataMongodbatlasAccessListApiKeysResultsList</a>

---

##### `apiKeyIdInput`<sup>Optional</sup> <a name="apiKeyIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.apiKeyIdInput"></a>

```java
public java.lang.String getApiKeyIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `itemsPerPageInput`<sup>Optional</sup> <a name="itemsPerPageInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.itemsPerPageInput"></a>

```java
public java.lang.Number getItemsPerPageInput();
```

- *Type:* java.lang.Number

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `pageNumInput`<sup>Optional</sup> <a name="pageNumInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.pageNumInput"></a>

```java
public java.lang.Number getPageNumInput();
```

- *Type:* java.lang.Number

---

##### `apiKeyId`<sup>Required</sup> <a name="apiKeyId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.apiKeyId"></a>

```java
public java.lang.String getApiKeyId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.itemsPerPage"></a>

```java
public java.lang.Number getItemsPerPage();
```

- *Type:* java.lang.Number

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

##### `pageNum`<sup>Required</sup> <a name="pageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.pageNum"></a>

```java
public java.lang.Number getPageNum();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeys.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasAccessListApiKeysConfig <a name="DataMongodbatlasAccessListApiKeysConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_access_list_api_keys.DataMongodbatlasAccessListApiKeysConfig;

DataMongodbatlasAccessListApiKeysConfig.builder()
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
    .apiKeyId(java.lang.String)
    .orgId(java.lang.String)
//  .id(java.lang.String)
//  .itemsPerPage(java.lang.Number)
//  .pageNum(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.apiKeyId">apiKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/access_list_api_keys#api_key_id DataMongodbatlasAccessListApiKeys#api_key_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/access_list_api_keys#org_id DataMongodbatlasAccessListApiKeys#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/access_list_api_keys#id DataMongodbatlasAccessListApiKeys#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.itemsPerPage">itemsPerPage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/access_list_api_keys#items_per_page DataMongodbatlasAccessListApiKeys#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.pageNum">pageNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/access_list_api_keys#page_num DataMongodbatlasAccessListApiKeys#page_num}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiKeyId`<sup>Required</sup> <a name="apiKeyId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.apiKeyId"></a>

```java
public java.lang.String getApiKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/access_list_api_keys#api_key_id DataMongodbatlasAccessListApiKeys#api_key_id}.

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/access_list_api_keys#org_id DataMongodbatlasAccessListApiKeys#org_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/access_list_api_keys#id DataMongodbatlasAccessListApiKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `itemsPerPage`<sup>Optional</sup> <a name="itemsPerPage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.itemsPerPage"></a>

```java
public java.lang.Number getItemsPerPage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/access_list_api_keys#items_per_page DataMongodbatlasAccessListApiKeys#items_per_page}.

---

##### `pageNum`<sup>Optional</sup> <a name="pageNum" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysConfig.property.pageNum"></a>

```java
public java.lang.Number getPageNum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/data-sources/access_list_api_keys#page_num DataMongodbatlasAccessListApiKeys#page_num}.

---

### DataMongodbatlasAccessListApiKeysResults <a name="DataMongodbatlasAccessListApiKeysResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResults.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_access_list_api_keys.DataMongodbatlasAccessListApiKeysResults;

DataMongodbatlasAccessListApiKeysResults.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasAccessListApiKeysResultsList <a name="DataMongodbatlasAccessListApiKeysResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_access_list_api_keys.DataMongodbatlasAccessListApiKeysResultsList;

new DataMongodbatlasAccessListApiKeysResultsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.get"></a>

```java
public DataMongodbatlasAccessListApiKeysResultsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasAccessListApiKeysResultsOutputReference <a name="DataMongodbatlasAccessListApiKeysResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_access_list_api_keys.DataMongodbatlasAccessListApiKeysResultsOutputReference;

new DataMongodbatlasAccessListApiKeysResultsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.accessCount">accessCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.lastUsed">lastUsed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.lastUsedAddress">lastUsedAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResults">DataMongodbatlasAccessListApiKeysResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessCount`<sup>Required</sup> <a name="accessCount" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.accessCount"></a>

```java
public java.lang.Number getAccessCount();
```

- *Type:* java.lang.Number

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `lastUsed`<sup>Required</sup> <a name="lastUsed" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.lastUsed"></a>

```java
public java.lang.String getLastUsed();
```

- *Type:* java.lang.String

---

##### `lastUsedAddress`<sup>Required</sup> <a name="lastUsedAddress" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.lastUsedAddress"></a>

```java
public java.lang.String getLastUsedAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResultsOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasAccessListApiKeysResults getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAccessListApiKeys.DataMongodbatlasAccessListApiKeysResults">DataMongodbatlasAccessListApiKeysResults</a>

---



