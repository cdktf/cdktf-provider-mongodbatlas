# `dataMongodbatlasAlertConfiguration` Submodule <a name="`dataMongodbatlasAlertConfiguration` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasAlertConfiguration <a name="DataMongodbatlasAlertConfiguration" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/alert_configuration mongodbatlas_alert_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_alert_configuration.DataMongodbatlasAlertConfiguration;

DataMongodbatlasAlertConfiguration.Builder.create(Construct scope, java.lang.String id)
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
    .alertConfigurationId(java.lang.String)
    .projectId(java.lang.String)
//  .output(IResolvable)
//  .output(java.util.List<DataMongodbatlasAlertConfigurationOutput>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.alertConfigurationId">alertConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/alert_configuration#alert_configuration_id DataMongodbatlasAlertConfiguration#alert_configuration_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/alert_configuration#project_id DataMongodbatlasAlertConfiguration#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.output">output</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput">DataMongodbatlasAlertConfigurationOutput</a>></code> | output block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alertConfigurationId`<sup>Required</sup> <a name="alertConfigurationId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.alertConfigurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/alert_configuration#alert_configuration_id DataMongodbatlasAlertConfiguration#alert_configuration_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/alert_configuration#project_id DataMongodbatlasAlertConfiguration#project_id}.

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.output"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput">DataMongodbatlasAlertConfigurationOutput</a>>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/alert_configuration#output DataMongodbatlasAlertConfiguration#output}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.putOutput">putOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.resetOutput">resetOutput</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putOutput` <a name="putOutput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.putOutput"></a>

```java
public void putOutput(IResolvable OR java.util.List<DataMongodbatlasAlertConfigurationOutput> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.putOutput.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput">DataMongodbatlasAlertConfigurationOutput</a>>

---

##### `resetOutput` <a name="resetOutput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.resetOutput"></a>

```java
public void resetOutput()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasAlertConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_alert_configuration.DataMongodbatlasAlertConfiguration;

DataMongodbatlasAlertConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_alert_configuration.DataMongodbatlasAlertConfiguration;

DataMongodbatlasAlertConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_alert_configuration.DataMongodbatlasAlertConfiguration;

DataMongodbatlasAlertConfiguration.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_alert_configuration.DataMongodbatlasAlertConfiguration;

DataMongodbatlasAlertConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataMongodbatlasAlertConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataMongodbatlasAlertConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataMongodbatlasAlertConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataMongodbatlasAlertConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/alert_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasAlertConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.eventType">eventType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.matcher">matcher</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList">DataMongodbatlasAlertConfigurationMatcherList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.metricThresholdConfig">metricThresholdConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList">DataMongodbatlasAlertConfigurationMetricThresholdConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList">DataMongodbatlasAlertConfigurationNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.output">output</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList">DataMongodbatlasAlertConfigurationOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.thresholdConfig">thresholdConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList">DataMongodbatlasAlertConfigurationThresholdConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.updated">updated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.alertConfigurationIdInput">alertConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.outputInput">outputInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput">DataMongodbatlasAlertConfigurationOutput</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.alertConfigurationId">alertConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.matcher"></a>

```java
public DataMongodbatlasAlertConfigurationMatcherList getMatcher();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList">DataMongodbatlasAlertConfigurationMatcherList</a>

---

##### `metricThresholdConfig`<sup>Required</sup> <a name="metricThresholdConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.metricThresholdConfig"></a>

```java
public DataMongodbatlasAlertConfigurationMetricThresholdConfigList getMetricThresholdConfig();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList">DataMongodbatlasAlertConfigurationMetricThresholdConfigList</a>

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.notification"></a>

```java
public DataMongodbatlasAlertConfigurationNotificationList getNotification();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList">DataMongodbatlasAlertConfigurationNotificationList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.output"></a>

```java
public DataMongodbatlasAlertConfigurationOutputList getOutput();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList">DataMongodbatlasAlertConfigurationOutputList</a>

---

##### `thresholdConfig`<sup>Required</sup> <a name="thresholdConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.thresholdConfig"></a>

```java
public DataMongodbatlasAlertConfigurationThresholdConfigList getThresholdConfig();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList">DataMongodbatlasAlertConfigurationThresholdConfigList</a>

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.updated"></a>

```java
public java.lang.String getUpdated();
```

- *Type:* java.lang.String

---

##### `alertConfigurationIdInput`<sup>Optional</sup> <a name="alertConfigurationIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.alertConfigurationIdInput"></a>

```java
public java.lang.String getAlertConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.outputInput"></a>

```java
public java.lang.Object getOutputInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput">DataMongodbatlasAlertConfigurationOutput</a>>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `alertConfigurationId`<sup>Required</sup> <a name="alertConfigurationId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.alertConfigurationId"></a>

```java
public java.lang.String getAlertConfigurationId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasAlertConfigurationConfig <a name="DataMongodbatlasAlertConfigurationConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_alert_configuration.DataMongodbatlasAlertConfigurationConfig;

DataMongodbatlasAlertConfigurationConfig.builder()
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
    .alertConfigurationId(java.lang.String)
    .projectId(java.lang.String)
//  .output(IResolvable)
//  .output(java.util.List<DataMongodbatlasAlertConfigurationOutput>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.alertConfigurationId">alertConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/alert_configuration#alert_configuration_id DataMongodbatlasAlertConfiguration#alert_configuration_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/alert_configuration#project_id DataMongodbatlasAlertConfiguration#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.output">output</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput">DataMongodbatlasAlertConfigurationOutput</a>></code> | output block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alertConfigurationId`<sup>Required</sup> <a name="alertConfigurationId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.alertConfigurationId"></a>

```java
public java.lang.String getAlertConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/alert_configuration#alert_configuration_id DataMongodbatlasAlertConfiguration#alert_configuration_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/alert_configuration#project_id DataMongodbatlasAlertConfiguration#project_id}.

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.output"></a>

```java
public java.lang.Object getOutput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput">DataMongodbatlasAlertConfigurationOutput</a>>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/alert_configuration#output DataMongodbatlasAlertConfiguration#output}

---

### DataMongodbatlasAlertConfigurationMatcher <a name="DataMongodbatlasAlertConfigurationMatcher" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcher.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_alert_configuration.DataMongodbatlasAlertConfigurationMatcher;

DataMongodbatlasAlertConfigurationMatcher.builder()
    .build();
```


### DataMongodbatlasAlertConfigurationMetricThresholdConfig <a name="DataMongodbatlasAlertConfigurationMetricThresholdConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_alert_configuration.DataMongodbatlasAlertConfigurationMetricThresholdConfig;

DataMongodbatlasAlertConfigurationMetricThresholdConfig.builder()
    .build();
```


### DataMongodbatlasAlertConfigurationNotification <a name="DataMongodbatlasAlertConfigurationNotification" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_alert_configuration.DataMongodbatlasAlertConfigurationNotification;

DataMongodbatlasAlertConfigurationNotification.builder()
    .build();
```


### DataMongodbatlasAlertConfigurationOutput <a name="DataMongodbatlasAlertConfigurationOutput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_alert_configuration.DataMongodbatlasAlertConfigurationOutput;

DataMongodbatlasAlertConfigurationOutput.builder()
    .type(java.lang.String)
//  .label(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/alert_configuration#type DataMongodbatlasAlertConfiguration#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput.property.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/alert_configuration#label DataMongodbatlasAlertConfiguration#label}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/alert_configuration#type DataMongodbatlasAlertConfiguration#type}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/alert_configuration#label DataMongodbatlasAlertConfiguration#label}.

---

### DataMongodbatlasAlertConfigurationThresholdConfig <a name="DataMongodbatlasAlertConfigurationThresholdConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_alert_configuration.DataMongodbatlasAlertConfigurationThresholdConfig;

DataMongodbatlasAlertConfigurationThresholdConfig.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasAlertConfigurationMatcherList <a name="DataMongodbatlasAlertConfigurationMatcherList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_alert_configuration.DataMongodbatlasAlertConfigurationMatcherList;

new DataMongodbatlasAlertConfigurationMatcherList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.get"></a>

```java
public DataMongodbatlasAlertConfigurationMatcherOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasAlertConfigurationMatcherOutputReference <a name="DataMongodbatlasAlertConfigurationMatcherOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_alert_configuration.DataMongodbatlasAlertConfigurationMatcherOutputReference;

new DataMongodbatlasAlertConfigurationMatcherOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcher">DataMongodbatlasAlertConfigurationMatcher</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasAlertConfigurationMatcher getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcher">DataMongodbatlasAlertConfigurationMatcher</a>

---


### DataMongodbatlasAlertConfigurationMetricThresholdConfigList <a name="DataMongodbatlasAlertConfigurationMetricThresholdConfigList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_alert_configuration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList;

new DataMongodbatlasAlertConfigurationMetricThresholdConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.get"></a>

```java
public DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference <a name="DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_alert_configuration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference;

new DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.units">units</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfig">DataMongodbatlasAlertConfigurationMetricThresholdConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasAlertConfigurationMetricThresholdConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfig">DataMongodbatlasAlertConfigurationMetricThresholdConfig</a>

---


### DataMongodbatlasAlertConfigurationNotificationList <a name="DataMongodbatlasAlertConfigurationNotificationList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_alert_configuration.DataMongodbatlasAlertConfigurationNotificationList;

new DataMongodbatlasAlertConfigurationNotificationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.get"></a>

```java
public DataMongodbatlasAlertConfigurationNotificationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasAlertConfigurationNotificationOutputReference <a name="DataMongodbatlasAlertConfigurationNotificationOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_alert_configuration.DataMongodbatlasAlertConfigurationNotificationOutputReference;

new DataMongodbatlasAlertConfigurationNotificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.apiToken">apiToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.channelName">channelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.datadogApiKey">datadogApiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.datadogRegion">datadogRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.delayMin">delayMin</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.emailEnabled">emailEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.integrationId">integrationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.intervalMin">intervalMin</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.microsoftTeamsWebhookUrl">microsoftTeamsWebhookUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.mobileNumber">mobileNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.notifierId">notifierId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.opsGenieApiKey">opsGenieApiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.opsGenieRegion">opsGenieRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.serviceKey">serviceKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.smsEnabled">smsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.teamId">teamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.teamName">teamName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.victorOpsApiKey">victorOpsApiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.victorOpsRoutingKey">victorOpsRoutingKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.webhookSecret">webhookSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.webhookUrl">webhookUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotification">DataMongodbatlasAlertConfigurationNotification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.apiToken"></a>

```java
public java.lang.String getApiToken();
```

- *Type:* java.lang.String

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

---

##### `datadogApiKey`<sup>Required</sup> <a name="datadogApiKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.datadogApiKey"></a>

```java
public java.lang.String getDatadogApiKey();
```

- *Type:* java.lang.String

---

##### `datadogRegion`<sup>Required</sup> <a name="datadogRegion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.datadogRegion"></a>

```java
public java.lang.String getDatadogRegion();
```

- *Type:* java.lang.String

---

##### `delayMin`<sup>Required</sup> <a name="delayMin" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.delayMin"></a>

```java
public java.lang.Number getDelayMin();
```

- *Type:* java.lang.Number

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `emailEnabled`<sup>Required</sup> <a name="emailEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.emailEnabled"></a>

```java
public IResolvable getEmailEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.integrationId"></a>

```java
public java.lang.String getIntegrationId();
```

- *Type:* java.lang.String

---

##### `intervalMin`<sup>Required</sup> <a name="intervalMin" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.intervalMin"></a>

```java
public java.lang.Number getIntervalMin();
```

- *Type:* java.lang.Number

---

##### `microsoftTeamsWebhookUrl`<sup>Required</sup> <a name="microsoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.microsoftTeamsWebhookUrl"></a>

```java
public java.lang.String getMicrosoftTeamsWebhookUrl();
```

- *Type:* java.lang.String

---

##### `mobileNumber`<sup>Required</sup> <a name="mobileNumber" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.mobileNumber"></a>

```java
public java.lang.String getMobileNumber();
```

- *Type:* java.lang.String

---

##### `notifierId`<sup>Required</sup> <a name="notifierId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.notifierId"></a>

```java
public java.lang.String getNotifierId();
```

- *Type:* java.lang.String

---

##### `opsGenieApiKey`<sup>Required</sup> <a name="opsGenieApiKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.opsGenieApiKey"></a>

```java
public java.lang.String getOpsGenieApiKey();
```

- *Type:* java.lang.String

---

##### `opsGenieRegion`<sup>Required</sup> <a name="opsGenieRegion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.opsGenieRegion"></a>

```java
public java.lang.String getOpsGenieRegion();
```

- *Type:* java.lang.String

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceKey`<sup>Required</sup> <a name="serviceKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.serviceKey"></a>

```java
public java.lang.String getServiceKey();
```

- *Type:* java.lang.String

---

##### `smsEnabled`<sup>Required</sup> <a name="smsEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.smsEnabled"></a>

```java
public IResolvable getSmsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

---

##### `teamName`<sup>Required</sup> <a name="teamName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.teamName"></a>

```java
public java.lang.String getTeamName();
```

- *Type:* java.lang.String

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `victorOpsApiKey`<sup>Required</sup> <a name="victorOpsApiKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.victorOpsApiKey"></a>

```java
public java.lang.String getVictorOpsApiKey();
```

- *Type:* java.lang.String

---

##### `victorOpsRoutingKey`<sup>Required</sup> <a name="victorOpsRoutingKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.victorOpsRoutingKey"></a>

```java
public java.lang.String getVictorOpsRoutingKey();
```

- *Type:* java.lang.String

---

##### `webhookSecret`<sup>Required</sup> <a name="webhookSecret" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.webhookSecret"></a>

```java
public java.lang.String getWebhookSecret();
```

- *Type:* java.lang.String

---

##### `webhookUrl`<sup>Required</sup> <a name="webhookUrl" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.webhookUrl"></a>

```java
public java.lang.String getWebhookUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasAlertConfigurationNotification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotification">DataMongodbatlasAlertConfigurationNotification</a>

---


### DataMongodbatlasAlertConfigurationOutputList <a name="DataMongodbatlasAlertConfigurationOutputList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_alert_configuration.DataMongodbatlasAlertConfigurationOutputList;

new DataMongodbatlasAlertConfigurationOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.get"></a>

```java
public DataMongodbatlasAlertConfigurationOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput">DataMongodbatlasAlertConfigurationOutput</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput">DataMongodbatlasAlertConfigurationOutput</a>>

---


### DataMongodbatlasAlertConfigurationOutputOutputReference <a name="DataMongodbatlasAlertConfigurationOutputOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_alert_configuration.DataMongodbatlasAlertConfigurationOutputOutputReference;

new DataMongodbatlasAlertConfigurationOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.resetLabel">resetLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.resetLabel"></a>

```java
public void resetLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput">DataMongodbatlasAlertConfigurationOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput">DataMongodbatlasAlertConfigurationOutput</a>

---


### DataMongodbatlasAlertConfigurationThresholdConfigList <a name="DataMongodbatlasAlertConfigurationThresholdConfigList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_alert_configuration.DataMongodbatlasAlertConfigurationThresholdConfigList;

new DataMongodbatlasAlertConfigurationThresholdConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.get"></a>

```java
public DataMongodbatlasAlertConfigurationThresholdConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasAlertConfigurationThresholdConfigOutputReference <a name="DataMongodbatlasAlertConfigurationThresholdConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_alert_configuration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference;

new DataMongodbatlasAlertConfigurationThresholdConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.units">units</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfig">DataMongodbatlasAlertConfigurationThresholdConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasAlertConfigurationThresholdConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfig">DataMongodbatlasAlertConfigurationThresholdConfig</a>

---



