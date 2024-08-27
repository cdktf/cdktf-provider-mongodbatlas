# `dataMongodbatlasEventTriggers` Submodule <a name="`dataMongodbatlasEventTriggers` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasEventTriggers <a name="DataMongodbatlasEventTriggers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/event_triggers mongodbatlas_event_triggers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_event_triggers.DataMongodbatlasEventTriggers;

DataMongodbatlasEventTriggers.Builder.create(Construct scope, java.lang.String id)
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
    .appId(java.lang.String)
    .projectId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.appId">appId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/event_triggers#app_id DataMongodbatlasEventTriggers#app_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/event_triggers#project_id DataMongodbatlasEventTriggers#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/event_triggers#id DataMongodbatlasEventTriggers#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.appId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/event_triggers#app_id DataMongodbatlasEventTriggers#app_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/event_triggers#project_id DataMongodbatlasEventTriggers#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/event_triggers#id DataMongodbatlasEventTriggers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasEventTriggers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_event_triggers.DataMongodbatlasEventTriggers;

DataMongodbatlasEventTriggers.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_event_triggers.DataMongodbatlasEventTriggers;

DataMongodbatlasEventTriggers.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_event_triggers.DataMongodbatlasEventTriggers;

DataMongodbatlasEventTriggers.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_event_triggers.DataMongodbatlasEventTriggers;

DataMongodbatlasEventTriggers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataMongodbatlasEventTriggers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataMongodbatlasEventTriggers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataMongodbatlasEventTriggers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataMongodbatlasEventTriggers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/event_triggers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasEventTriggers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList">DataMongodbatlasEventTriggersResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.results"></a>

```java
public DataMongodbatlasEventTriggersResultsList getResults();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList">DataMongodbatlasEventTriggersResultsList</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasEventTriggersConfig <a name="DataMongodbatlasEventTriggersConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_event_triggers.DataMongodbatlasEventTriggersConfig;

DataMongodbatlasEventTriggersConfig.builder()
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
    .appId(java.lang.String)
    .projectId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/event_triggers#app_id DataMongodbatlasEventTriggers#app_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/event_triggers#project_id DataMongodbatlasEventTriggers#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/event_triggers#id DataMongodbatlasEventTriggers#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/event_triggers#app_id DataMongodbatlasEventTriggers#app_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/event_triggers#project_id DataMongodbatlasEventTriggers#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/data-sources/event_triggers#id DataMongodbatlasEventTriggers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasEventTriggersResults <a name="DataMongodbatlasEventTriggersResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResults.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_event_triggers.DataMongodbatlasEventTriggersResults;

DataMongodbatlasEventTriggersResults.builder()
    .build();
```


### DataMongodbatlasEventTriggersResultsEventProcessors <a name="DataMongodbatlasEventTriggersResultsEventProcessors" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_event_triggers.DataMongodbatlasEventTriggersResultsEventProcessors;

DataMongodbatlasEventTriggersResultsEventProcessors.builder()
    .build();
```


### DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge <a name="DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_event_triggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge;

DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList <a name="DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_event_triggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList;

new DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.get"></a>

```java
public DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference <a name="DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_event_triggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference;

new DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.property.configAccountId">configAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.property.configRegion">configRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge">DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configAccountId`<sup>Required</sup> <a name="configAccountId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.property.configAccountId"></a>

```java
public java.lang.String getConfigAccountId();
```

- *Type:* java.lang.String

---

##### `configRegion`<sup>Required</sup> <a name="configRegion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.property.configRegion"></a>

```java
public java.lang.String getConfigRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge">DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge</a>

---


### DataMongodbatlasEventTriggersResultsEventProcessorsList <a name="DataMongodbatlasEventTriggersResultsEventProcessorsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_event_triggers.DataMongodbatlasEventTriggersResultsEventProcessorsList;

new DataMongodbatlasEventTriggersResultsEventProcessorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.get"></a>

```java
public DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference <a name="DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_event_triggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference;

new DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.property.awsEventbridge">awsEventbridge</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList">DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessors">DataMongodbatlasEventTriggersResultsEventProcessors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsEventbridge`<sup>Required</sup> <a name="awsEventbridge" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.property.awsEventbridge"></a>

```java
public DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList getAwsEventbridge();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList">DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasEventTriggersResultsEventProcessors getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessors">DataMongodbatlasEventTriggersResultsEventProcessors</a>

---


### DataMongodbatlasEventTriggersResultsList <a name="DataMongodbatlasEventTriggersResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_event_triggers.DataMongodbatlasEventTriggersResultsList;

new DataMongodbatlasEventTriggersResultsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.get"></a>

```java
public DataMongodbatlasEventTriggersResultsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasEventTriggersResultsOutputReference <a name="DataMongodbatlasEventTriggersResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_event_triggers.DataMongodbatlasEventTriggersResultsOutputReference;

new DataMongodbatlasEventTriggersResultsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configCollection">configCollection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configDatabase">configDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configFullDocument">configFullDocument</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configFullDocumentBefore">configFullDocumentBefore</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configMatch">configMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configOperationType">configOperationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configOperationTypes">configOperationTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configProject">configProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configProviders">configProviders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configSchedule">configSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configScheduleType">configScheduleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configServiceId">configServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.disabled">disabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.eventProcessors">eventProcessors</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList">DataMongodbatlasEventTriggersResultsEventProcessorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.functionId">functionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.triggerId">triggerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.unordered">unordered</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResults">DataMongodbatlasEventTriggersResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configCollection`<sup>Required</sup> <a name="configCollection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configCollection"></a>

```java
public java.lang.String getConfigCollection();
```

- *Type:* java.lang.String

---

##### `configDatabase`<sup>Required</sup> <a name="configDatabase" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configDatabase"></a>

```java
public java.lang.String getConfigDatabase();
```

- *Type:* java.lang.String

---

##### `configFullDocument`<sup>Required</sup> <a name="configFullDocument" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configFullDocument"></a>

```java
public IResolvable getConfigFullDocument();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `configFullDocumentBefore`<sup>Required</sup> <a name="configFullDocumentBefore" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configFullDocumentBefore"></a>

```java
public IResolvable getConfigFullDocumentBefore();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `configMatch`<sup>Required</sup> <a name="configMatch" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configMatch"></a>

```java
public java.lang.String getConfigMatch();
```

- *Type:* java.lang.String

---

##### `configOperationType`<sup>Required</sup> <a name="configOperationType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configOperationType"></a>

```java
public java.lang.String getConfigOperationType();
```

- *Type:* java.lang.String

---

##### `configOperationTypes`<sup>Required</sup> <a name="configOperationTypes" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configOperationTypes"></a>

```java
public java.util.List<java.lang.String> getConfigOperationTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configProject`<sup>Required</sup> <a name="configProject" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configProject"></a>

```java
public java.lang.String getConfigProject();
```

- *Type:* java.lang.String

---

##### `configProviders`<sup>Required</sup> <a name="configProviders" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configProviders"></a>

```java
public java.util.List<java.lang.String> getConfigProviders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configSchedule`<sup>Required</sup> <a name="configSchedule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configSchedule"></a>

```java
public java.lang.String getConfigSchedule();
```

- *Type:* java.lang.String

---

##### `configScheduleType`<sup>Required</sup> <a name="configScheduleType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configScheduleType"></a>

```java
public java.lang.String getConfigScheduleType();
```

- *Type:* java.lang.String

---

##### `configServiceId`<sup>Required</sup> <a name="configServiceId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configServiceId"></a>

```java
public java.lang.String getConfigServiceId();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.disabled"></a>

```java
public IResolvable getDisabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `eventProcessors`<sup>Required</sup> <a name="eventProcessors" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.eventProcessors"></a>

```java
public DataMongodbatlasEventTriggersResultsEventProcessorsList getEventProcessors();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList">DataMongodbatlasEventTriggersResultsEventProcessorsList</a>

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `triggerId`<sup>Required</sup> <a name="triggerId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.triggerId"></a>

```java
public java.lang.String getTriggerId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `unordered`<sup>Required</sup> <a name="unordered" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.unordered"></a>

```java
public IResolvable getUnordered();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasEventTriggersResults getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResults">DataMongodbatlasEventTriggersResults</a>

---



