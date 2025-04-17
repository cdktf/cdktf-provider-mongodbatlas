# `x509AuthenticationDatabaseUser` Submodule <a name="`x509AuthenticationDatabaseUser` Submodule" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### X509AuthenticationDatabaseUser <a name="X509AuthenticationDatabaseUser" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.33.0/docs/resources/x509_authentication_database_user mongodbatlas_x509_authentication_database_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.x509_authentication_database_user.X509AuthenticationDatabaseUser;

X509AuthenticationDatabaseUser.Builder.create(Construct scope, java.lang.String id)
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
//  .customerX509Cas(java.lang.String)
//  .id(java.lang.String)
//  .monthsUntilExpiration(java.lang.Number)
//  .username(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.33.0/docs/resources/x509_authentication_database_user#project_id X509AuthenticationDatabaseUser#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.customerX509Cas">customerX509Cas</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.33.0/docs/resources/x509_authentication_database_user#customer_x509_cas X509AuthenticationDatabaseUser#customer_x509_cas}. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.33.0/docs/resources/x509_authentication_database_user#id X509AuthenticationDatabaseUser#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.monthsUntilExpiration">monthsUntilExpiration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.33.0/docs/resources/x509_authentication_database_user#months_until_expiration X509AuthenticationDatabaseUser#months_until_expiration}. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.33.0/docs/resources/x509_authentication_database_user#username X509AuthenticationDatabaseUser#username}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.33.0/docs/resources/x509_authentication_database_user#project_id X509AuthenticationDatabaseUser#project_id}.

---

##### `customerX509Cas`<sup>Optional</sup> <a name="customerX509Cas" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.customerX509Cas"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.33.0/docs/resources/x509_authentication_database_user#customer_x509_cas X509AuthenticationDatabaseUser#customer_x509_cas}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.33.0/docs/resources/x509_authentication_database_user#id X509AuthenticationDatabaseUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monthsUntilExpiration`<sup>Optional</sup> <a name="monthsUntilExpiration" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.monthsUntilExpiration"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.33.0/docs/resources/x509_authentication_database_user#months_until_expiration X509AuthenticationDatabaseUser#months_until_expiration}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.33.0/docs/resources/x509_authentication_database_user#username X509AuthenticationDatabaseUser#username}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.resetCustomerX509Cas">resetCustomerX509Cas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.resetMonthsUntilExpiration">resetMonthsUntilExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCustomerX509Cas` <a name="resetCustomerX509Cas" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.resetCustomerX509Cas"></a>

```java
public void resetCustomerX509Cas()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.resetId"></a>

```java
public void resetId()
```

##### `resetMonthsUntilExpiration` <a name="resetMonthsUntilExpiration" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.resetMonthsUntilExpiration"></a>

```java
public void resetMonthsUntilExpiration()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.resetUsername"></a>

```java
public void resetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a X509AuthenticationDatabaseUser resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.x509_authentication_database_user.X509AuthenticationDatabaseUser;

X509AuthenticationDatabaseUser.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.x509_authentication_database_user.X509AuthenticationDatabaseUser;

X509AuthenticationDatabaseUser.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.x509_authentication_database_user.X509AuthenticationDatabaseUser;

X509AuthenticationDatabaseUser.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.x509_authentication_database_user.X509AuthenticationDatabaseUser;

X509AuthenticationDatabaseUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),X509AuthenticationDatabaseUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a X509AuthenticationDatabaseUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the X509AuthenticationDatabaseUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing X509AuthenticationDatabaseUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.33.0/docs/resources/x509_authentication_database_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the X509AuthenticationDatabaseUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.certificates">certificates</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList">X509AuthenticationDatabaseUserCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.currentCertificate">currentCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.customerX509CasInput">customerX509CasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.monthsUntilExpirationInput">monthsUntilExpirationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.customerX509Cas">customerX509Cas</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.monthsUntilExpiration">monthsUntilExpiration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.certificates"></a>

```java
public X509AuthenticationDatabaseUserCertificatesList getCertificates();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList">X509AuthenticationDatabaseUserCertificatesList</a>

---

##### `currentCertificate`<sup>Required</sup> <a name="currentCertificate" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.currentCertificate"></a>

```java
public java.lang.String getCurrentCertificate();
```

- *Type:* java.lang.String

---

##### `customerX509CasInput`<sup>Optional</sup> <a name="customerX509CasInput" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.customerX509CasInput"></a>

```java
public java.lang.String getCustomerX509CasInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `monthsUntilExpirationInput`<sup>Optional</sup> <a name="monthsUntilExpirationInput" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.monthsUntilExpirationInput"></a>

```java
public java.lang.Number getMonthsUntilExpirationInput();
```

- *Type:* java.lang.Number

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `customerX509Cas`<sup>Required</sup> <a name="customerX509Cas" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.customerX509Cas"></a>

```java
public java.lang.String getCustomerX509Cas();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `monthsUntilExpiration`<sup>Required</sup> <a name="monthsUntilExpiration" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.monthsUntilExpiration"></a>

```java
public java.lang.Number getMonthsUntilExpiration();
```

- *Type:* java.lang.Number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUser.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### X509AuthenticationDatabaseUserCertificates <a name="X509AuthenticationDatabaseUserCertificates" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.x509_authentication_database_user.X509AuthenticationDatabaseUserCertificates;

X509AuthenticationDatabaseUserCertificates.builder()
    .build();
```


### X509AuthenticationDatabaseUserConfig <a name="X509AuthenticationDatabaseUserConfig" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.x509_authentication_database_user.X509AuthenticationDatabaseUserConfig;

X509AuthenticationDatabaseUserConfig.builder()
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
//  .customerX509Cas(java.lang.String)
//  .id(java.lang.String)
//  .monthsUntilExpiration(java.lang.Number)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.33.0/docs/resources/x509_authentication_database_user#project_id X509AuthenticationDatabaseUser#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.customerX509Cas">customerX509Cas</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.33.0/docs/resources/x509_authentication_database_user#customer_x509_cas X509AuthenticationDatabaseUser#customer_x509_cas}. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.33.0/docs/resources/x509_authentication_database_user#id X509AuthenticationDatabaseUser#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.monthsUntilExpiration">monthsUntilExpiration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.33.0/docs/resources/x509_authentication_database_user#months_until_expiration X509AuthenticationDatabaseUser#months_until_expiration}. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.33.0/docs/resources/x509_authentication_database_user#username X509AuthenticationDatabaseUser#username}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.33.0/docs/resources/x509_authentication_database_user#project_id X509AuthenticationDatabaseUser#project_id}.

---

##### `customerX509Cas`<sup>Optional</sup> <a name="customerX509Cas" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.customerX509Cas"></a>

```java
public java.lang.String getCustomerX509Cas();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.33.0/docs/resources/x509_authentication_database_user#customer_x509_cas X509AuthenticationDatabaseUser#customer_x509_cas}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.33.0/docs/resources/x509_authentication_database_user#id X509AuthenticationDatabaseUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monthsUntilExpiration`<sup>Optional</sup> <a name="monthsUntilExpiration" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.monthsUntilExpiration"></a>

```java
public java.lang.Number getMonthsUntilExpiration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.33.0/docs/resources/x509_authentication_database_user#months_until_expiration X509AuthenticationDatabaseUser#months_until_expiration}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.33.0/docs/resources/x509_authentication_database_user#username X509AuthenticationDatabaseUser#username}.

---

## Classes <a name="Classes" id="Classes"></a>

### X509AuthenticationDatabaseUserCertificatesList <a name="X509AuthenticationDatabaseUserCertificatesList" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.x509_authentication_database_user.X509AuthenticationDatabaseUserCertificatesList;

new X509AuthenticationDatabaseUserCertificatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.get"></a>

```java
public X509AuthenticationDatabaseUserCertificatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### X509AuthenticationDatabaseUserCertificatesOutputReference <a name="X509AuthenticationDatabaseUserCertificatesOutputReference" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.x509_authentication_database_user.X509AuthenticationDatabaseUserCertificatesOutputReference;

new X509AuthenticationDatabaseUserCertificatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.property.notAfter">notAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificates">X509AuthenticationDatabaseUserCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `notAfter`<sup>Required</sup> <a name="notAfter" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.property.notAfter"></a>

```java
public java.lang.String getNotAfter();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificatesOutputReference.property.internalValue"></a>

```java
public X509AuthenticationDatabaseUserCertificates getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.x509AuthenticationDatabaseUser.X509AuthenticationDatabaseUserCertificates">X509AuthenticationDatabaseUserCertificates</a>

---



