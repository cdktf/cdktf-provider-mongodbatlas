# `mongodbatlas_cloud_provider_access_setup`

Refer to the Terraform Registory for docs: [`mongodbatlas_cloud_provider_access_setup`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_access_setup).

# `cloudProviderAccessSetup` Submodule <a name="`cloudProviderAccessSetup` Submodule" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudProviderAccessSetup <a name="CloudProviderAccessSetup" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_access_setup mongodbatlas_cloud_provider_access_setup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_provider_access_setup.CloudProviderAccessSetup;

CloudProviderAccessSetup.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_access_setup#project_id CloudProviderAccessSetup#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_access_setup#provider_name CloudProviderAccessSetup#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_access_setup#id CloudProviderAccessSetup#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_access_setup#project_id CloudProviderAccessSetup#project_id}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.providerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_access_setup#provider_name CloudProviderAccessSetup#provider_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_access_setup#id CloudProviderAccessSetup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_provider_access_setup.CloudProviderAccessSetup;

CloudProviderAccessSetup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_provider_access_setup.CloudProviderAccessSetup;

CloudProviderAccessSetup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_provider_access_setup.CloudProviderAccessSetup;

CloudProviderAccessSetup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.aws">aws</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.awsConfig">awsConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList">CloudProviderAccessSetupAwsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.createdDate">createdDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.roleId">roleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.providerNameInput">providerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.aws"></a>

```java
public StringMap getAws();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `awsConfig`<sup>Required</sup> <a name="awsConfig" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.awsConfig"></a>

```java
public CloudProviderAccessSetupAwsConfigList getAwsConfig();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList">CloudProviderAccessSetupAwsConfigList</a>

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.createdDate"></a>

```java
public java.lang.String getCreatedDate();
```

- *Type:* java.lang.String

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.providerNameInput"></a>

```java
public java.lang.String getProviderNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudProviderAccessSetupAwsConfig <a name="CloudProviderAccessSetupAwsConfig" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_provider_access_setup.CloudProviderAccessSetupAwsConfig;

CloudProviderAccessSetupAwsConfig.builder()
    .build();
```


### CloudProviderAccessSetupConfig <a name="CloudProviderAccessSetupConfig" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_provider_access_setup.CloudProviderAccessSetupConfig;

CloudProviderAccessSetupConfig.builder()
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
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_access_setup#project_id CloudProviderAccessSetup#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupConfig.property.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_access_setup#provider_name CloudProviderAccessSetup#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_access_setup#id CloudProviderAccessSetup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_access_setup#project_id CloudProviderAccessSetup#project_id}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupConfig.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_access_setup#provider_name CloudProviderAccessSetup#provider_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/cloud_provider_access_setup#id CloudProviderAccessSetup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudProviderAccessSetupAwsConfigList <a name="CloudProviderAccessSetupAwsConfigList" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_provider_access_setup.CloudProviderAccessSetupAwsConfigList;

new CloudProviderAccessSetupAwsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList.get"></a>

```java
public CloudProviderAccessSetupAwsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudProviderAccessSetupAwsConfigOutputReference <a name="CloudProviderAccessSetupAwsConfigOutputReference" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cloud_provider_access_setup.CloudProviderAccessSetupAwsConfigOutputReference;

new CloudProviderAccessSetupAwsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.property.atlasAssumedRoleExternalId">atlasAssumedRoleExternalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.property.atlasAwsAccountArn">atlasAwsAccountArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfig">CloudProviderAccessSetupAwsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `atlasAssumedRoleExternalId`<sup>Required</sup> <a name="atlasAssumedRoleExternalId" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.property.atlasAssumedRoleExternalId"></a>

```java
public java.lang.String getAtlasAssumedRoleExternalId();
```

- *Type:* java.lang.String

---

##### `atlasAwsAccountArn`<sup>Required</sup> <a name="atlasAwsAccountArn" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.property.atlasAwsAccountArn"></a>

```java
public java.lang.String getAtlasAwsAccountArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfigOutputReference.property.internalValue"></a>

```java
public CloudProviderAccessSetupAwsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.cloudProviderAccessSetup.CloudProviderAccessSetupAwsConfig">CloudProviderAccessSetupAwsConfig</a>

---



