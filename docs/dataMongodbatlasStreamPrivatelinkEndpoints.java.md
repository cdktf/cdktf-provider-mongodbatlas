# `dataMongodbatlasStreamPrivatelinkEndpoints` Submodule <a name="`dataMongodbatlasStreamPrivatelinkEndpoints` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasStreamPrivatelinkEndpoints <a name="DataMongodbatlasStreamPrivatelinkEndpoints" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/stream_privatelink_endpoints mongodbatlas_stream_privatelink_endpoints}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_stream_privatelink_endpoints.DataMongodbatlasStreamPrivatelinkEndpoints;

DataMongodbatlasStreamPrivatelinkEndpoints.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .projectId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Unique 24-hexadecimal digit string that identifies your project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Unique 24-hexadecimal digit string that identifies your project.

Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.<br>**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group or project id remains the same. The resource and corresponding endpoints use the term groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/stream_privatelink_endpoints#project_id DataMongodbatlasStreamPrivatelinkEndpoints#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasStreamPrivatelinkEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_stream_privatelink_endpoints.DataMongodbatlasStreamPrivatelinkEndpoints;

DataMongodbatlasStreamPrivatelinkEndpoints.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_stream_privatelink_endpoints.DataMongodbatlasStreamPrivatelinkEndpoints;

DataMongodbatlasStreamPrivatelinkEndpoints.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_stream_privatelink_endpoints.DataMongodbatlasStreamPrivatelinkEndpoints;

DataMongodbatlasStreamPrivatelinkEndpoints.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_stream_privatelink_endpoints.DataMongodbatlasStreamPrivatelinkEndpoints;

DataMongodbatlasStreamPrivatelinkEndpoints.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataMongodbatlasStreamPrivatelinkEndpoints.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataMongodbatlasStreamPrivatelinkEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataMongodbatlasStreamPrivatelinkEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataMongodbatlasStreamPrivatelinkEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/stream_privatelink_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasStreamPrivatelinkEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList">DataMongodbatlasStreamPrivatelinkEndpointsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.results"></a>

```java
public DataMongodbatlasStreamPrivatelinkEndpointsResultsList getResults();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList">DataMongodbatlasStreamPrivatelinkEndpointsResultsList</a>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpoints.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasStreamPrivatelinkEndpointsConfig <a name="DataMongodbatlasStreamPrivatelinkEndpointsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_stream_privatelink_endpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig;

DataMongodbatlasStreamPrivatelinkEndpointsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Unique 24-hexadecimal digit string that identifies your project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Unique 24-hexadecimal digit string that identifies your project.

Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.<br>**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group or project id remains the same. The resource and corresponding endpoints use the term groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/stream_privatelink_endpoints#project_id DataMongodbatlasStreamPrivatelinkEndpoints#project_id}

---

### DataMongodbatlasStreamPrivatelinkEndpointsResults <a name="DataMongodbatlasStreamPrivatelinkEndpointsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResults.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_stream_privatelink_endpoints.DataMongodbatlasStreamPrivatelinkEndpointsResults;

DataMongodbatlasStreamPrivatelinkEndpointsResults.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasStreamPrivatelinkEndpointsResultsList <a name="DataMongodbatlasStreamPrivatelinkEndpointsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_stream_privatelink_endpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList;

new DataMongodbatlasStreamPrivatelinkEndpointsResultsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.get"></a>

```java
public DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference <a name="DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_stream_privatelink_endpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference;

new DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.dnsDomain">dnsDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.dnsSubDomain">dnsSubDomain</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.interfaceEndpointId">interfaceEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.interfaceEndpointName">interfaceEndpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.providerAccountId">providerAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.serviceEndpointId">serviceEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.vendor">vendor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResults">DataMongodbatlasStreamPrivatelinkEndpointsResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `dnsDomain`<sup>Required</sup> <a name="dnsDomain" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.dnsDomain"></a>

```java
public java.lang.String getDnsDomain();
```

- *Type:* java.lang.String

---

##### `dnsSubDomain`<sup>Required</sup> <a name="dnsSubDomain" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.dnsSubDomain"></a>

```java
public java.util.List<java.lang.String> getDnsSubDomain();
```

- *Type:* java.util.List<java.lang.String>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interfaceEndpointId`<sup>Required</sup> <a name="interfaceEndpointId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.interfaceEndpointId"></a>

```java
public java.lang.String getInterfaceEndpointId();
```

- *Type:* java.lang.String

---

##### `interfaceEndpointName`<sup>Required</sup> <a name="interfaceEndpointName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.interfaceEndpointName"></a>

```java
public java.lang.String getInterfaceEndpointName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `providerAccountId`<sup>Required</sup> <a name="providerAccountId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.providerAccountId"></a>

```java
public java.lang.String getProviderAccountId();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `serviceEndpointId`<sup>Required</sup> <a name="serviceEndpointId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.serviceEndpointId"></a>

```java
public java.lang.String getServiceEndpointId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.vendor"></a>

```java
public java.lang.String getVendor();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasStreamPrivatelinkEndpointsResults getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoints.DataMongodbatlasStreamPrivatelinkEndpointsResults">DataMongodbatlasStreamPrivatelinkEndpointsResults</a>

---



