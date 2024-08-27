# `organization` Submodule <a name="`organization` Submodule" id="@cdktf/provider-mongodbatlas.organization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Organization <a name="Organization" id="@cdktf/provider-mongodbatlas.organization.Organization"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization mongodbatlas_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.organization.Organization;

Organization.Builder.create(Construct scope, java.lang.String id)
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
    .description(java.lang.String)
    .name(java.lang.String)
    .orgOwnerId(java.lang.String)
    .roleNames(java.util.List<java.lang.String>)
//  .apiAccessListRequired(java.lang.Boolean)
//  .apiAccessListRequired(IResolvable)
//  .federationSettingsId(java.lang.String)
//  .id(java.lang.String)
//  .multiFactorAuthRequired(java.lang.Boolean)
//  .multiFactorAuthRequired(IResolvable)
//  .restrictEmployeeAccess(java.lang.Boolean)
//  .restrictEmployeeAccess(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#description Organization#description}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#name Organization#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.orgOwnerId">orgOwnerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#org_owner_id Organization#org_owner_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.roleNames">roleNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#role_names Organization#role_names}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.apiAccessListRequired">apiAccessListRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#api_access_list_required Organization#api_access_list_required}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.federationSettingsId">federationSettingsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#federation_settings_id Organization#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#id Organization#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.multiFactorAuthRequired">multiFactorAuthRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#multi_factor_auth_required Organization#multi_factor_auth_required}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.restrictEmployeeAccess">restrictEmployeeAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#restrict_employee_access Organization#restrict_employee_access}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#description Organization#description}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#name Organization#name}.

---

##### `orgOwnerId`<sup>Required</sup> <a name="orgOwnerId" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.orgOwnerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#org_owner_id Organization#org_owner_id}.

---

##### `roleNames`<sup>Required</sup> <a name="roleNames" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.roleNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#role_names Organization#role_names}.

---

##### `apiAccessListRequired`<sup>Optional</sup> <a name="apiAccessListRequired" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.apiAccessListRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#api_access_list_required Organization#api_access_list_required}.

---

##### `federationSettingsId`<sup>Optional</sup> <a name="federationSettingsId" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.federationSettingsId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#federation_settings_id Organization#federation_settings_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#id Organization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multiFactorAuthRequired`<sup>Optional</sup> <a name="multiFactorAuthRequired" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.multiFactorAuthRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#multi_factor_auth_required Organization#multi_factor_auth_required}.

---

##### `restrictEmployeeAccess`<sup>Optional</sup> <a name="restrictEmployeeAccess" id="@cdktf/provider-mongodbatlas.organization.Organization.Initializer.parameter.restrictEmployeeAccess"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#restrict_employee_access Organization#restrict_employee_access}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetApiAccessListRequired">resetApiAccessListRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetFederationSettingsId">resetFederationSettingsId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetMultiFactorAuthRequired">resetMultiFactorAuthRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.resetRestrictEmployeeAccess">resetRestrictEmployeeAccess</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.organization.Organization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.organization.Organization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.organization.Organization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.organization.Organization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.organization.Organization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.organization.Organization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.organization.Organization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.organization.Organization.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.organization.Organization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.organization.Organization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.organization.Organization.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.organization.Organization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.organization.Organization.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.organization.Organization.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.organization.Organization.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.organization.Organization.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.organization.Organization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.organization.Organization.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.organization.Organization.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.organization.Organization.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.organization.Organization.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.organization.Organization.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.organization.Organization.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.organization.Organization.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetApiAccessListRequired` <a name="resetApiAccessListRequired" id="@cdktf/provider-mongodbatlas.organization.Organization.resetApiAccessListRequired"></a>

```java
public void resetApiAccessListRequired()
```

##### `resetFederationSettingsId` <a name="resetFederationSettingsId" id="@cdktf/provider-mongodbatlas.organization.Organization.resetFederationSettingsId"></a>

```java
public void resetFederationSettingsId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.organization.Organization.resetId"></a>

```java
public void resetId()
```

##### `resetMultiFactorAuthRequired` <a name="resetMultiFactorAuthRequired" id="@cdktf/provider-mongodbatlas.organization.Organization.resetMultiFactorAuthRequired"></a>

```java
public void resetMultiFactorAuthRequired()
```

##### `resetRestrictEmployeeAccess` <a name="resetRestrictEmployeeAccess" id="@cdktf/provider-mongodbatlas.organization.Organization.resetRestrictEmployeeAccess"></a>

```java
public void resetRestrictEmployeeAccess()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.organization.Organization.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.organization.Organization;

Organization.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.organization.Organization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.organization.Organization.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.organization.Organization;

Organization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.organization.Organization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.organization.Organization.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.organization.Organization;

Organization.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.organization.Organization.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.organization.Organization.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.organization.Organization;

Organization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Organization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.organization.Organization.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.organization.Organization.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Organization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.organization.Organization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Organization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.organization.Organization.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Organization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.apiAccessListRequiredInput">apiAccessListRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.federationSettingsIdInput">federationSettingsIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.multiFactorAuthRequiredInput">multiFactorAuthRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.orgOwnerIdInput">orgOwnerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.restrictEmployeeAccessInput">restrictEmployeeAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.roleNamesInput">roleNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.apiAccessListRequired">apiAccessListRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.federationSettingsId">federationSettingsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.multiFactorAuthRequired">multiFactorAuthRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.orgOwnerId">orgOwnerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.restrictEmployeeAccess">restrictEmployeeAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.roleNames">roleNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.organization.Organization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.organization.Organization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.organization.Organization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.organization.Organization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.organization.Organization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.organization.Organization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.organization.Organization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.organization.Organization.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.organization.Organization.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.organization.Organization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.organization.Organization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.organization.Organization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.organization.Organization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.organization.Organization.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.organization.Organization.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-mongodbatlas.organization.Organization.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-mongodbatlas.organization.Organization.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

##### `apiAccessListRequiredInput`<sup>Optional</sup> <a name="apiAccessListRequiredInput" id="@cdktf/provider-mongodbatlas.organization.Organization.property.apiAccessListRequiredInput"></a>

```java
public java.lang.Object getApiAccessListRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-mongodbatlas.organization.Organization.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `federationSettingsIdInput`<sup>Optional</sup> <a name="federationSettingsIdInput" id="@cdktf/provider-mongodbatlas.organization.Organization.property.federationSettingsIdInput"></a>

```java
public java.lang.String getFederationSettingsIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.organization.Organization.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `multiFactorAuthRequiredInput`<sup>Optional</sup> <a name="multiFactorAuthRequiredInput" id="@cdktf/provider-mongodbatlas.organization.Organization.property.multiFactorAuthRequiredInput"></a>

```java
public java.lang.Object getMultiFactorAuthRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-mongodbatlas.organization.Organization.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orgOwnerIdInput`<sup>Optional</sup> <a name="orgOwnerIdInput" id="@cdktf/provider-mongodbatlas.organization.Organization.property.orgOwnerIdInput"></a>

```java
public java.lang.String getOrgOwnerIdInput();
```

- *Type:* java.lang.String

---

##### `restrictEmployeeAccessInput`<sup>Optional</sup> <a name="restrictEmployeeAccessInput" id="@cdktf/provider-mongodbatlas.organization.Organization.property.restrictEmployeeAccessInput"></a>

```java
public java.lang.Object getRestrictEmployeeAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `roleNamesInput`<sup>Optional</sup> <a name="roleNamesInput" id="@cdktf/provider-mongodbatlas.organization.Organization.property.roleNamesInput"></a>

```java
public java.util.List<java.lang.String> getRoleNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiAccessListRequired`<sup>Required</sup> <a name="apiAccessListRequired" id="@cdktf/provider-mongodbatlas.organization.Organization.property.apiAccessListRequired"></a>

```java
public java.lang.Object getApiAccessListRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-mongodbatlas.organization.Organization.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `federationSettingsId`<sup>Required</sup> <a name="federationSettingsId" id="@cdktf/provider-mongodbatlas.organization.Organization.property.federationSettingsId"></a>

```java
public java.lang.String getFederationSettingsId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.organization.Organization.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `multiFactorAuthRequired`<sup>Required</sup> <a name="multiFactorAuthRequired" id="@cdktf/provider-mongodbatlas.organization.Organization.property.multiFactorAuthRequired"></a>

```java
public java.lang.Object getMultiFactorAuthRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.organization.Organization.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `orgOwnerId`<sup>Required</sup> <a name="orgOwnerId" id="@cdktf/provider-mongodbatlas.organization.Organization.property.orgOwnerId"></a>

```java
public java.lang.String getOrgOwnerId();
```

- *Type:* java.lang.String

---

##### `restrictEmployeeAccess`<sup>Required</sup> <a name="restrictEmployeeAccess" id="@cdktf/provider-mongodbatlas.organization.Organization.property.restrictEmployeeAccess"></a>

```java
public java.lang.Object getRestrictEmployeeAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `roleNames`<sup>Required</sup> <a name="roleNames" id="@cdktf/provider-mongodbatlas.organization.Organization.property.roleNames"></a>

```java
public java.util.List<java.lang.String> getRoleNames();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.Organization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.organization.Organization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationConfig <a name="OrganizationConfig" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.organization.OrganizationConfig;

OrganizationConfig.builder()
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
    .description(java.lang.String)
    .name(java.lang.String)
    .orgOwnerId(java.lang.String)
    .roleNames(java.util.List<java.lang.String>)
//  .apiAccessListRequired(java.lang.Boolean)
//  .apiAccessListRequired(IResolvable)
//  .federationSettingsId(java.lang.String)
//  .id(java.lang.String)
//  .multiFactorAuthRequired(java.lang.Boolean)
//  .multiFactorAuthRequired(IResolvable)
//  .restrictEmployeeAccess(java.lang.Boolean)
//  .restrictEmployeeAccess(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#description Organization#description}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#name Organization#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.orgOwnerId">orgOwnerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#org_owner_id Organization#org_owner_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.roleNames">roleNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#role_names Organization#role_names}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.apiAccessListRequired">apiAccessListRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#api_access_list_required Organization#api_access_list_required}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.federationSettingsId">federationSettingsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#federation_settings_id Organization#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#id Organization#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.multiFactorAuthRequired">multiFactorAuthRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#multi_factor_auth_required Organization#multi_factor_auth_required}. |
| <code><a href="#@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.restrictEmployeeAccess">restrictEmployeeAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#restrict_employee_access Organization#restrict_employee_access}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#description Organization#description}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#name Organization#name}.

---

##### `orgOwnerId`<sup>Required</sup> <a name="orgOwnerId" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.orgOwnerId"></a>

```java
public java.lang.String getOrgOwnerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#org_owner_id Organization#org_owner_id}.

---

##### `roleNames`<sup>Required</sup> <a name="roleNames" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.roleNames"></a>

```java
public java.util.List<java.lang.String> getRoleNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#role_names Organization#role_names}.

---

##### `apiAccessListRequired`<sup>Optional</sup> <a name="apiAccessListRequired" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.apiAccessListRequired"></a>

```java
public java.lang.Object getApiAccessListRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#api_access_list_required Organization#api_access_list_required}.

---

##### `federationSettingsId`<sup>Optional</sup> <a name="federationSettingsId" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.federationSettingsId"></a>

```java
public java.lang.String getFederationSettingsId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#federation_settings_id Organization#federation_settings_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#id Organization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multiFactorAuthRequired`<sup>Optional</sup> <a name="multiFactorAuthRequired" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.multiFactorAuthRequired"></a>

```java
public java.lang.Object getMultiFactorAuthRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#multi_factor_auth_required Organization#multi_factor_auth_required}.

---

##### `restrictEmployeeAccess`<sup>Optional</sup> <a name="restrictEmployeeAccess" id="@cdktf/provider-mongodbatlas.organization.OrganizationConfig.property.restrictEmployeeAccess"></a>

```java
public java.lang.Object getRestrictEmployeeAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.1/docs/resources/organization#restrict_employee_access Organization#restrict_employee_access}.

---



