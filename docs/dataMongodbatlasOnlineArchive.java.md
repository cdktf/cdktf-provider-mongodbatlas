# `data_mongodbatlas_online_archive`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_online_archive`](https://www.terraform.io/docs/providers/mongodbatlas/d/online_archive).

# `dataMongodbatlasOnlineArchive` Submodule <a name="`dataMongodbatlasOnlineArchive` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasOnlineArchive <a name="DataMongodbatlasOnlineArchive" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive"></a>

Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/d/online_archive mongodbatlas_online_archive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_online_archive.DataMongodbatlasOnlineArchive;

DataMongodbatlasOnlineArchive.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .archiveId(java.lang.String)
    .clusterName(java.lang.String)
    .projectId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.archiveId">archiveId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/online_archive#archive_id DataMongodbatlasOnlineArchive#archive_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/online_archive#cluster_name DataMongodbatlasOnlineArchive#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/online_archive#project_id DataMongodbatlasOnlineArchive#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/online_archive#id DataMongodbatlasOnlineArchive#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `archiveId`<sup>Required</sup> <a name="archiveId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.archiveId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/online_archive#archive_id DataMongodbatlasOnlineArchive#archive_id}.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/online_archive#cluster_name DataMongodbatlasOnlineArchive#cluster_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/online_archive#project_id DataMongodbatlasOnlineArchive#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/online_archive#id DataMongodbatlasOnlineArchive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_online_archive.DataMongodbatlasOnlineArchive;

DataMongodbatlasOnlineArchive.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_online_archive.DataMongodbatlasOnlineArchive;

DataMongodbatlasOnlineArchive.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_online_archive.DataMongodbatlasOnlineArchive;

DataMongodbatlasOnlineArchive.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.collectionType">collectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.collName">collName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList">DataMongodbatlasOnlineArchiveCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.partitionFields">partitionFields</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList">DataMongodbatlasOnlineArchivePartitionFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.paused">paused</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.archiveIdInput">archiveIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.archiveId">archiveId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `collectionType`<sup>Required</sup> <a name="collectionType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.collectionType"></a>

```java
public java.lang.String getCollectionType();
```

- *Type:* java.lang.String

---

##### `collName`<sup>Required</sup> <a name="collName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.collName"></a>

```java
public java.lang.String getCollName();
```

- *Type:* java.lang.String

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.criteria"></a>

```java
public DataMongodbatlasOnlineArchiveCriteriaList getCriteria();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList">DataMongodbatlasOnlineArchiveCriteriaList</a>

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `partitionFields`<sup>Required</sup> <a name="partitionFields" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.partitionFields"></a>

```java
public DataMongodbatlasOnlineArchivePartitionFieldsList getPartitionFields();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList">DataMongodbatlasOnlineArchivePartitionFieldsList</a>

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.paused"></a>

```java
public IResolvable getPaused();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `archiveIdInput`<sup>Optional</sup> <a name="archiveIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.archiveIdInput"></a>

```java
public java.lang.String getArchiveIdInput();
```

- *Type:* java.lang.String

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `archiveId`<sup>Required</sup> <a name="archiveId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.archiveId"></a>

```java
public java.lang.String getArchiveId();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchive.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasOnlineArchiveConfig <a name="DataMongodbatlasOnlineArchiveConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_online_archive.DataMongodbatlasOnlineArchiveConfig;

DataMongodbatlasOnlineArchiveConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .archiveId(java.lang.String)
    .clusterName(java.lang.String)
    .projectId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig.property.archiveId">archiveId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/online_archive#archive_id DataMongodbatlasOnlineArchive#archive_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/online_archive#cluster_name DataMongodbatlasOnlineArchive#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/online_archive#project_id DataMongodbatlasOnlineArchive#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/online_archive#id DataMongodbatlasOnlineArchive#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `archiveId`<sup>Required</sup> <a name="archiveId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig.property.archiveId"></a>

```java
public java.lang.String getArchiveId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/online_archive#archive_id DataMongodbatlasOnlineArchive#archive_id}.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/online_archive#cluster_name DataMongodbatlasOnlineArchive#cluster_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/online_archive#project_id DataMongodbatlasOnlineArchive#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/online_archive#id DataMongodbatlasOnlineArchive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasOnlineArchiveCriteria <a name="DataMongodbatlasOnlineArchiveCriteria" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteria.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_online_archive.DataMongodbatlasOnlineArchiveCriteria;

DataMongodbatlasOnlineArchiveCriteria.builder()
    .build();
```


### DataMongodbatlasOnlineArchivePartitionFields <a name="DataMongodbatlasOnlineArchivePartitionFields" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFields.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_online_archive.DataMongodbatlasOnlineArchivePartitionFields;

DataMongodbatlasOnlineArchivePartitionFields.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasOnlineArchiveCriteriaList <a name="DataMongodbatlasOnlineArchiveCriteriaList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_online_archive.DataMongodbatlasOnlineArchiveCriteriaList;

new DataMongodbatlasOnlineArchiveCriteriaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList.get"></a>

```java
public DataMongodbatlasOnlineArchiveCriteriaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasOnlineArchiveCriteriaOutputReference <a name="DataMongodbatlasOnlineArchiveCriteriaOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_online_archive.DataMongodbatlasOnlineArchiveCriteriaOutputReference;

new DataMongodbatlasOnlineArchiveCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.property.dateField">dateField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.property.dateFormat">dateFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.property.expireAfterDays">expireAfterDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteria">DataMongodbatlasOnlineArchiveCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dateField`<sup>Required</sup> <a name="dateField" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.property.dateField"></a>

```java
public java.lang.String getDateField();
```

- *Type:* java.lang.String

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.property.dateFormat"></a>

```java
public java.lang.String getDateFormat();
```

- *Type:* java.lang.String

---

##### `expireAfterDays`<sup>Required</sup> <a name="expireAfterDays" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.property.expireAfterDays"></a>

```java
public java.lang.Number getExpireAfterDays();
```

- *Type:* java.lang.Number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteriaOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasOnlineArchiveCriteria getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchiveCriteria">DataMongodbatlasOnlineArchiveCriteria</a>

---


### DataMongodbatlasOnlineArchivePartitionFieldsList <a name="DataMongodbatlasOnlineArchivePartitionFieldsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_online_archive.DataMongodbatlasOnlineArchivePartitionFieldsList;

new DataMongodbatlasOnlineArchivePartitionFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList.get"></a>

```java
public DataMongodbatlasOnlineArchivePartitionFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasOnlineArchivePartitionFieldsOutputReference <a name="DataMongodbatlasOnlineArchivePartitionFieldsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_online_archive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference;

new DataMongodbatlasOnlineArchivePartitionFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.property.fieldType">fieldType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.property.order">order</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFields">DataMongodbatlasOnlineArchivePartitionFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

---

##### `fieldType`<sup>Required</sup> <a name="fieldType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.property.fieldType"></a>

```java
public java.lang.String getFieldType();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFieldsOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasOnlineArchivePartitionFields getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchive.DataMongodbatlasOnlineArchivePartitionFields">DataMongodbatlasOnlineArchivePartitionFields</a>

---



