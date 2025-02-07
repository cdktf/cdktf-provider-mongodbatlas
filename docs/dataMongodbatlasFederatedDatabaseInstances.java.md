# `dataMongodbatlasFederatedDatabaseInstances` Submodule <a name="`dataMongodbatlasFederatedDatabaseInstances` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasFederatedDatabaseInstances <a name="DataMongodbatlasFederatedDatabaseInstances" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/data-sources/federated_database_instances mongodbatlas_federated_database_instances}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstances;

DataMongodbatlasFederatedDatabaseInstances.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/data-sources/federated_database_instances#project_id DataMongodbatlasFederatedDatabaseInstances#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/data-sources/federated_database_instances#id DataMongodbatlasFederatedDatabaseInstances#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/data-sources/federated_database_instances#project_id DataMongodbatlasFederatedDatabaseInstances#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/data-sources/federated_database_instances#id DataMongodbatlasFederatedDatabaseInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasFederatedDatabaseInstances resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstances;

DataMongodbatlasFederatedDatabaseInstances.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstances;

DataMongodbatlasFederatedDatabaseInstances.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstances;

DataMongodbatlasFederatedDatabaseInstances.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstances;

DataMongodbatlasFederatedDatabaseInstances.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataMongodbatlasFederatedDatabaseInstances.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataMongodbatlasFederatedDatabaseInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataMongodbatlasFederatedDatabaseInstances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataMongodbatlasFederatedDatabaseInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/data-sources/federated_database_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasFederatedDatabaseInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList">DataMongodbatlasFederatedDatabaseInstancesResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.results"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsList getResults();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList">DataMongodbatlasFederatedDatabaseInstancesResultsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstances.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasFederatedDatabaseInstancesConfig <a name="DataMongodbatlasFederatedDatabaseInstancesConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesConfig;

DataMongodbatlasFederatedDatabaseInstancesConfig.builder()
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
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/data-sources/federated_database_instances#project_id DataMongodbatlasFederatedDatabaseInstances#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/data-sources/federated_database_instances#id DataMongodbatlasFederatedDatabaseInstances#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/data-sources/federated_database_instances#project_id DataMongodbatlasFederatedDatabaseInstances#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.1/docs/data-sources/federated_database_instances#id DataMongodbatlasFederatedDatabaseInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasFederatedDatabaseInstancesResults <a name="DataMongodbatlasFederatedDatabaseInstancesResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResults.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResults;

DataMongodbatlasFederatedDatabaseInstancesResults.builder()
    .build();
```


### DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig <a name="DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig;

DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig.builder()
    .build();
```


### DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws <a name="DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws;

DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws.builder()
    .build();
```


### DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion <a name="DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion;

DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion.builder()
    .build();
```


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases;

DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases.builder()
    .build();
```


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections;

DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections.builder()
    .build();
```


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources;

DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources.builder()
    .build();
```


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews;

DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews.builder()
    .build();
```


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores;

DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores.builder()
    .build();
```


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference;

DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference.builder()
    .build();
```


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSets <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSets" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSets;

DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSets.builder()
    .build();
```


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTags <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTags" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTags;

DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList <a name="DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList;

new DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.get"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference;

new DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.iamAssumedRoleArn">iamAssumedRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.iamUserArn">iamUserArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.roleId">roleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.testS3Bucket">testS3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws">DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `iamAssumedRoleArn`<sup>Required</sup> <a name="iamAssumedRoleArn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.iamAssumedRoleArn"></a>

```java
public java.lang.String getIamAssumedRoleArn();
```

- *Type:* java.lang.String

---

##### `iamUserArn`<sup>Required</sup> <a name="iamUserArn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.iamUserArn"></a>

```java
public java.lang.String getIamUserArn();
```

- *Type:* java.lang.String

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

---

##### `testS3Bucket`<sup>Required</sup> <a name="testS3Bucket" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.testS3Bucket"></a>

```java
public java.lang.String getTestS3Bucket();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws">DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAws</a>

---


### DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList <a name="DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList;

new DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.get"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference;

new DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList">DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig">DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.property.aws"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList getAws();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList">DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigAwsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig">DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfig</a>

---


### DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList <a name="DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList;

new DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.get"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference;

new DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.property.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion">DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.property.cloudProvider"></a>

```java
public java.lang.String getCloudProvider();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion">DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegion</a>

---


### DataMongodbatlasFederatedDatabaseInstancesResultsList <a name="DataMongodbatlasFederatedDatabaseInstancesResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsList;

new DataMongodbatlasFederatedDatabaseInstancesResultsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.get"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference;

new DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.cloudProviderConfig">cloudProviderConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList">DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.dataProcessRegion">dataProcessRegion</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList">DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.storageDatabases">storageDatabases</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.storageStores">storageStores</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResults">DataMongodbatlasFederatedDatabaseInstancesResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudProviderConfig`<sup>Required</sup> <a name="cloudProviderConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.cloudProviderConfig"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList getCloudProviderConfig();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList">DataMongodbatlasFederatedDatabaseInstancesResultsCloudProviderConfigList</a>

---

##### `dataProcessRegion`<sup>Required</sup> <a name="dataProcessRegion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.dataProcessRegion"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList getDataProcessRegion();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList">DataMongodbatlasFederatedDatabaseInstancesResultsDataProcessRegionList</a>

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `storageDatabases`<sup>Required</sup> <a name="storageDatabases" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.storageDatabases"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList getStorageDatabases();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList</a>

---

##### `storageStores`<sup>Required</sup> <a name="storageStores" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.storageStores"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList getStorageStores();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResults getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResults">DataMongodbatlasFederatedDatabaseInstancesResults</a>

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList;

new DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.get"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference;

new DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.allowInsecure">allowInsecure</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.collection">collection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.collectionRegex">collectionRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.databaseRegex">databaseRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.datasetName">datasetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.defaultFormat">defaultFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.provenanceFieldName">provenanceFieldName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.storeName">storeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.urls">urls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowInsecure`<sup>Required</sup> <a name="allowInsecure" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.allowInsecure"></a>

```java
public IResolvable getAllowInsecure();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.collection"></a>

```java
public java.lang.String getCollection();
```

- *Type:* java.lang.String

---

##### `collectionRegex`<sup>Required</sup> <a name="collectionRegex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.collectionRegex"></a>

```java
public java.lang.String getCollectionRegex();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `databaseRegex`<sup>Required</sup> <a name="databaseRegex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.databaseRegex"></a>

```java
public java.lang.String getDatabaseRegex();
```

- *Type:* java.lang.String

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.datasetName"></a>

```java
public java.lang.String getDatasetName();
```

- *Type:* java.lang.String

---

##### `defaultFormat`<sup>Required</sup> <a name="defaultFormat" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.defaultFormat"></a>

```java
public java.lang.String getDefaultFormat();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `provenanceFieldName`<sup>Required</sup> <a name="provenanceFieldName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.provenanceFieldName"></a>

```java
public java.lang.String getProvenanceFieldName();
```

- *Type:* java.lang.String

---

##### `storeName`<sup>Required</sup> <a name="storeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.storeName"></a>

```java
public java.lang.String getStoreName();
```

- *Type:* java.lang.String

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.urls"></a>

```java
public java.util.List<java.lang.String> getUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSources</a>

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList;

new DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.get"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference;

new DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.property.dataSources">dataSources</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.property.dataSources"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList getDataSources();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsDataSourcesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollections</a>

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList;

new DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.get"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference;

new DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.collections">collections</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.maxWildcardCollections">maxWildcardCollections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.views">views</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `collections`<sup>Required</sup> <a name="collections" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.collections"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList getCollections();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesCollectionsList</a>

---

##### `maxWildcardCollections`<sup>Required</sup> <a name="maxWildcardCollections" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.maxWildcardCollections"></a>

```java
public java.lang.Number getMaxWildcardCollections();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `views`<sup>Required</sup> <a name="views" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.views"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList getViews();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabases</a>

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList;

new DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.get"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference;

new DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.pipeline">pipeline</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.pipeline"></a>

```java
public java.lang.String getPipeline();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViewsOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews">DataMongodbatlasFederatedDatabaseInstancesResultsStorageDatabasesViews</a>

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList;

new DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.get"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference;

new DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.additionalStorageClasses">additionalStorageClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.allowInsecure">allowInsecure</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.defaultFormat">defaultFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.includeTags">includeTags</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.provider">provider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.public">public</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.readPreference">readPreference</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.urls">urls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalStorageClasses`<sup>Required</sup> <a name="additionalStorageClasses" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.additionalStorageClasses"></a>

```java
public java.util.List<java.lang.String> getAdditionalStorageClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowInsecure`<sup>Required</sup> <a name="allowInsecure" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.allowInsecure"></a>

```java
public IResolvable getAllowInsecure();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `defaultFormat`<sup>Required</sup> <a name="defaultFormat" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.defaultFormat"></a>

```java
public java.lang.String getDefaultFormat();
```

- *Type:* java.lang.String

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

---

##### `includeTags`<sup>Required</sup> <a name="includeTags" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.includeTags"></a>

```java
public IResolvable getIncludeTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.public"></a>

```java
public java.lang.String getPublic();
```

- *Type:* java.lang.String

---

##### `readPreference`<sup>Required</sup> <a name="readPreference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.readPreference"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList getReadPreference();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.urls"></a>

```java
public java.util.List<java.lang.String> getUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStores</a>

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList;

new DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.get"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference;

new DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.maxStalenessSeconds">maxStalenessSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.tagSets">tagSets</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxStalenessSeconds`<sup>Required</sup> <a name="maxStalenessSeconds" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.maxStalenessSeconds"></a>

```java
public java.lang.Number getMaxStalenessSeconds();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `tagSets`<sup>Required</sup> <a name="tagSets" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.tagSets"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList getTagSets();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreference</a>

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList;

new DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.get"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference;

new DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSets">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.property.tags"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList getTags();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSets">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSets</a>

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList;

new DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.get"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference <a name="DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_federated_database_instances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference;

new DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTags">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTagsOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedDatabaseInstances.DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTags">DataMongodbatlasFederatedDatabaseInstancesResultsStorageStoresReadPreferenceTagSetsTags</a>

---



