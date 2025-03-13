# `dataMongodbatlasStreamPrivatelinkEndpoint` Submodule <a name="`dataMongodbatlasStreamPrivatelinkEndpoint` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasStreamPrivatelinkEndpoint <a name="DataMongodbatlasStreamPrivatelinkEndpoint" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/data-sources/stream_privatelink_endpoint mongodbatlas_stream_privatelink_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_stream_privatelink_endpoint.DataMongodbatlasStreamPrivatelinkEndpoint;

DataMongodbatlasStreamPrivatelinkEndpoint.Builder.create(Construct scope, java.lang.String id)
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
    .id(java.lang.String)
    .projectId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The ID of the Private Link connection. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Unique 24-hexadecimal digit string that identifies your project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The ID of the Private Link connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/data-sources/stream_privatelink_endpoint#id DataMongodbatlasStreamPrivatelinkEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Unique 24-hexadecimal digit string that identifies your project.

Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group or project id remains the same. The resource and corresponding endpoints use the term groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/data-sources/stream_privatelink_endpoint#project_id DataMongodbatlasStreamPrivatelinkEndpoint#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasStreamPrivatelinkEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_stream_privatelink_endpoint.DataMongodbatlasStreamPrivatelinkEndpoint;

DataMongodbatlasStreamPrivatelinkEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_stream_privatelink_endpoint.DataMongodbatlasStreamPrivatelinkEndpoint;

DataMongodbatlasStreamPrivatelinkEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_stream_privatelink_endpoint.DataMongodbatlasStreamPrivatelinkEndpoint;

DataMongodbatlasStreamPrivatelinkEndpoint.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_stream_privatelink_endpoint.DataMongodbatlasStreamPrivatelinkEndpoint;

DataMongodbatlasStreamPrivatelinkEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataMongodbatlasStreamPrivatelinkEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataMongodbatlasStreamPrivatelinkEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataMongodbatlasStreamPrivatelinkEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataMongodbatlasStreamPrivatelinkEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/data-sources/stream_privatelink_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasStreamPrivatelinkEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.dnsDomain">dnsDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.dnsSubDomain">dnsSubDomain</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.interfaceEndpointId">interfaceEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.serviceEndpointId">serviceEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.vendor">vendor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `dnsDomain`<sup>Required</sup> <a name="dnsDomain" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.dnsDomain"></a>

```java
public java.lang.String getDnsDomain();
```

- *Type:* java.lang.String

---

##### `dnsSubDomain`<sup>Required</sup> <a name="dnsSubDomain" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.dnsSubDomain"></a>

```java
public java.util.List<java.lang.String> getDnsSubDomain();
```

- *Type:* java.util.List<java.lang.String>

---

##### `interfaceEndpointId`<sup>Required</sup> <a name="interfaceEndpointId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.interfaceEndpointId"></a>

```java
public java.lang.String getInterfaceEndpointId();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `serviceEndpointId`<sup>Required</sup> <a name="serviceEndpointId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.serviceEndpointId"></a>

```java
public java.lang.String getServiceEndpointId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.vendor"></a>

```java
public java.lang.String getVendor();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasStreamPrivatelinkEndpointConfig <a name="DataMongodbatlasStreamPrivatelinkEndpointConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_stream_privatelink_endpoint.DataMongodbatlasStreamPrivatelinkEndpointConfig;

DataMongodbatlasStreamPrivatelinkEndpointConfig.builder()
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
    .id(java.lang.String)
    .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpointConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the Private Link connection. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpointConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Unique 24-hexadecimal digit string that identifies your project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpointConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the Private Link connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/data-sources/stream_privatelink_endpoint#id DataMongodbatlasStreamPrivatelinkEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamPrivatelinkEndpoint.DataMongodbatlasStreamPrivatelinkEndpointConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Unique 24-hexadecimal digit string that identifies your project.

Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group or project id remains the same. The resource and corresponding endpoints use the term groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/data-sources/stream_privatelink_endpoint#project_id DataMongodbatlasStreamPrivatelinkEndpoint#project_id}

---



