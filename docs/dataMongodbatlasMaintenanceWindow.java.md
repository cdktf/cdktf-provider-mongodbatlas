# `dataMongodbatlasMaintenanceWindow` Submodule <a name="`dataMongodbatlasMaintenanceWindow` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasMaintenanceWindow <a name="DataMongodbatlasMaintenanceWindow" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/maintenance_window mongodbatlas_maintenance_window}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_maintenance_window.DataMongodbatlasMaintenanceWindow;

DataMongodbatlasMaintenanceWindow.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/maintenance_window#project_id DataMongodbatlasMaintenanceWindow#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/maintenance_window#id DataMongodbatlasMaintenanceWindow#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/maintenance_window#project_id DataMongodbatlasMaintenanceWindow#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/maintenance_window#id DataMongodbatlasMaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasMaintenanceWindow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_maintenance_window.DataMongodbatlasMaintenanceWindow;

DataMongodbatlasMaintenanceWindow.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_maintenance_window.DataMongodbatlasMaintenanceWindow;

DataMongodbatlasMaintenanceWindow.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_maintenance_window.DataMongodbatlasMaintenanceWindow;

DataMongodbatlasMaintenanceWindow.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_maintenance_window.DataMongodbatlasMaintenanceWindow;

DataMongodbatlasMaintenanceWindow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataMongodbatlasMaintenanceWindow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataMongodbatlasMaintenanceWindow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataMongodbatlasMaintenanceWindow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataMongodbatlasMaintenanceWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/maintenance_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasMaintenanceWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.autoDeferOnceEnabled">autoDeferOnceEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.hourOfDay">hourOfDay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.numberOfDeferrals">numberOfDeferrals</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.protectedHours">protectedHours</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList">DataMongodbatlasMaintenanceWindowProtectedHoursList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.startAsap">startAsap</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.timeZoneId">timeZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `autoDeferOnceEnabled`<sup>Required</sup> <a name="autoDeferOnceEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.autoDeferOnceEnabled"></a>

```java
public IResolvable getAutoDeferOnceEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.dayOfWeek"></a>

```java
public java.lang.Number getDayOfWeek();
```

- *Type:* java.lang.Number

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.hourOfDay"></a>

```java
public java.lang.Number getHourOfDay();
```

- *Type:* java.lang.Number

---

##### `numberOfDeferrals`<sup>Required</sup> <a name="numberOfDeferrals" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.numberOfDeferrals"></a>

```java
public java.lang.Number getNumberOfDeferrals();
```

- *Type:* java.lang.Number

---

##### `protectedHours`<sup>Required</sup> <a name="protectedHours" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.protectedHours"></a>

```java
public DataMongodbatlasMaintenanceWindowProtectedHoursList getProtectedHours();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList">DataMongodbatlasMaintenanceWindowProtectedHoursList</a>

---

##### `startAsap`<sup>Required</sup> <a name="startAsap" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.startAsap"></a>

```java
public IResolvable getStartAsap();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `timeZoneId`<sup>Required</sup> <a name="timeZoneId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.timeZoneId"></a>

```java
public java.lang.String getTimeZoneId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindow.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasMaintenanceWindowConfig <a name="DataMongodbatlasMaintenanceWindowConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_maintenance_window.DataMongodbatlasMaintenanceWindowConfig;

DataMongodbatlasMaintenanceWindowConfig.builder()
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
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/maintenance_window#project_id DataMongodbatlasMaintenanceWindow#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/maintenance_window#id DataMongodbatlasMaintenanceWindow#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/maintenance_window#project_id DataMongodbatlasMaintenanceWindow#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/data-sources/maintenance_window#id DataMongodbatlasMaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasMaintenanceWindowProtectedHours <a name="DataMongodbatlasMaintenanceWindowProtectedHours" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHours.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_maintenance_window.DataMongodbatlasMaintenanceWindowProtectedHours;

DataMongodbatlasMaintenanceWindowProtectedHours.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasMaintenanceWindowProtectedHoursList <a name="DataMongodbatlasMaintenanceWindowProtectedHoursList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_maintenance_window.DataMongodbatlasMaintenanceWindowProtectedHoursList;

new DataMongodbatlasMaintenanceWindowProtectedHoursList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.get"></a>

```java
public DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference <a name="DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_maintenance_window.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference;

new DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.property.endHourOfDay">endHourOfDay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.property.startHourOfDay">startHourOfDay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHours">DataMongodbatlasMaintenanceWindowProtectedHours</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endHourOfDay`<sup>Required</sup> <a name="endHourOfDay" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.property.endHourOfDay"></a>

```java
public java.lang.Number getEndHourOfDay();
```

- *Type:* java.lang.Number

---

##### `startHourOfDay`<sup>Required</sup> <a name="startHourOfDay" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.property.startHourOfDay"></a>

```java
public java.lang.Number getStartHourOfDay();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHoursOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasMaintenanceWindowProtectedHours getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasMaintenanceWindow.DataMongodbatlasMaintenanceWindowProtectedHours">DataMongodbatlasMaintenanceWindowProtectedHours</a>

---



