# `federatedSettingsOrgRoleMapping` Submodule <a name="`federatedSettingsOrgRoleMapping` Submodule" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FederatedSettingsOrgRoleMapping <a name="FederatedSettingsOrgRoleMapping" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/federated_settings_org_role_mapping mongodbatlas_federated_settings_org_role_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.federated_settings_org_role_mapping.FederatedSettingsOrgRoleMapping;

FederatedSettingsOrgRoleMapping.Builder.create(Construct scope, java.lang.String id)
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
    .externalGroupName(java.lang.String)
    .federationSettingsId(java.lang.String)
    .orgId(java.lang.String)
    .roleAssignments(IResolvable)
    .roleAssignments(java.util.List<FederatedSettingsOrgRoleMappingRoleAssignments>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.externalGroupName">externalGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/federated_settings_org_role_mapping#external_group_name FederatedSettingsOrgRoleMapping#external_group_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.federationSettingsId">federationSettingsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/federated_settings_org_role_mapping#federation_settings_id FederatedSettingsOrgRoleMapping#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/federated_settings_org_role_mapping#org_id FederatedSettingsOrgRoleMapping#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.roleAssignments">roleAssignments</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments">FederatedSettingsOrgRoleMappingRoleAssignments</a>></code> | role_assignments block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `externalGroupName`<sup>Required</sup> <a name="externalGroupName" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.externalGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/federated_settings_org_role_mapping#external_group_name FederatedSettingsOrgRoleMapping#external_group_name}.

---

##### `federationSettingsId`<sup>Required</sup> <a name="federationSettingsId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.federationSettingsId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/federated_settings_org_role_mapping#federation_settings_id FederatedSettingsOrgRoleMapping#federation_settings_id}.

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/federated_settings_org_role_mapping#org_id FederatedSettingsOrgRoleMapping#org_id}.

---

##### `roleAssignments`<sup>Required</sup> <a name="roleAssignments" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.Initializer.parameter.roleAssignments"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments">FederatedSettingsOrgRoleMappingRoleAssignments</a>>

role_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/federated_settings_org_role_mapping#role_assignments FederatedSettingsOrgRoleMapping#role_assignments}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.putRoleAssignments">putRoleAssignments</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRoleAssignments` <a name="putRoleAssignments" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.putRoleAssignments"></a>

```java
public void putRoleAssignments(IResolvable OR java.util.List<FederatedSettingsOrgRoleMappingRoleAssignments> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.putRoleAssignments.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments">FederatedSettingsOrgRoleMappingRoleAssignments</a>>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FederatedSettingsOrgRoleMapping resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.federated_settings_org_role_mapping.FederatedSettingsOrgRoleMapping;

FederatedSettingsOrgRoleMapping.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.federated_settings_org_role_mapping.FederatedSettingsOrgRoleMapping;

FederatedSettingsOrgRoleMapping.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.federated_settings_org_role_mapping.FederatedSettingsOrgRoleMapping;

FederatedSettingsOrgRoleMapping.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.federated_settings_org_role_mapping.FederatedSettingsOrgRoleMapping;

FederatedSettingsOrgRoleMapping.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FederatedSettingsOrgRoleMapping.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FederatedSettingsOrgRoleMapping resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FederatedSettingsOrgRoleMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FederatedSettingsOrgRoleMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/federated_settings_org_role_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FederatedSettingsOrgRoleMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.roleAssignments">roleAssignments</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList">FederatedSettingsOrgRoleMappingRoleAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.roleMappingId">roleMappingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.externalGroupNameInput">externalGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.federationSettingsIdInput">federationSettingsIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.roleAssignmentsInput">roleAssignmentsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments">FederatedSettingsOrgRoleMappingRoleAssignments</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.externalGroupName">externalGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.federationSettingsId">federationSettingsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `roleAssignments`<sup>Required</sup> <a name="roleAssignments" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.roleAssignments"></a>

```java
public FederatedSettingsOrgRoleMappingRoleAssignmentsList getRoleAssignments();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList">FederatedSettingsOrgRoleMappingRoleAssignmentsList</a>

---

##### `roleMappingId`<sup>Required</sup> <a name="roleMappingId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.roleMappingId"></a>

```java
public java.lang.String getRoleMappingId();
```

- *Type:* java.lang.String

---

##### `externalGroupNameInput`<sup>Optional</sup> <a name="externalGroupNameInput" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.externalGroupNameInput"></a>

```java
public java.lang.String getExternalGroupNameInput();
```

- *Type:* java.lang.String

---

##### `federationSettingsIdInput`<sup>Optional</sup> <a name="federationSettingsIdInput" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.federationSettingsIdInput"></a>

```java
public java.lang.String getFederationSettingsIdInput();
```

- *Type:* java.lang.String

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `roleAssignmentsInput`<sup>Optional</sup> <a name="roleAssignmentsInput" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.roleAssignmentsInput"></a>

```java
public java.lang.Object getRoleAssignmentsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments">FederatedSettingsOrgRoleMappingRoleAssignments</a>>

---

##### `externalGroupName`<sup>Required</sup> <a name="externalGroupName" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.externalGroupName"></a>

```java
public java.lang.String getExternalGroupName();
```

- *Type:* java.lang.String

---

##### `federationSettingsId`<sup>Required</sup> <a name="federationSettingsId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.federationSettingsId"></a>

```java
public java.lang.String getFederationSettingsId();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMapping.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FederatedSettingsOrgRoleMappingConfig <a name="FederatedSettingsOrgRoleMappingConfig" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.federated_settings_org_role_mapping.FederatedSettingsOrgRoleMappingConfig;

FederatedSettingsOrgRoleMappingConfig.builder()
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
    .externalGroupName(java.lang.String)
    .federationSettingsId(java.lang.String)
    .orgId(java.lang.String)
    .roleAssignments(IResolvable)
    .roleAssignments(java.util.List<FederatedSettingsOrgRoleMappingRoleAssignments>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.externalGroupName">externalGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/federated_settings_org_role_mapping#external_group_name FederatedSettingsOrgRoleMapping#external_group_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.federationSettingsId">federationSettingsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/federated_settings_org_role_mapping#federation_settings_id FederatedSettingsOrgRoleMapping#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/federated_settings_org_role_mapping#org_id FederatedSettingsOrgRoleMapping#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.roleAssignments">roleAssignments</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments">FederatedSettingsOrgRoleMappingRoleAssignments</a>></code> | role_assignments block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `externalGroupName`<sup>Required</sup> <a name="externalGroupName" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.externalGroupName"></a>

```java
public java.lang.String getExternalGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/federated_settings_org_role_mapping#external_group_name FederatedSettingsOrgRoleMapping#external_group_name}.

---

##### `federationSettingsId`<sup>Required</sup> <a name="federationSettingsId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.federationSettingsId"></a>

```java
public java.lang.String getFederationSettingsId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/federated_settings_org_role_mapping#federation_settings_id FederatedSettingsOrgRoleMapping#federation_settings_id}.

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/federated_settings_org_role_mapping#org_id FederatedSettingsOrgRoleMapping#org_id}.

---

##### `roleAssignments`<sup>Required</sup> <a name="roleAssignments" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingConfig.property.roleAssignments"></a>

```java
public java.lang.Object getRoleAssignments();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments">FederatedSettingsOrgRoleMappingRoleAssignments</a>>

role_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/federated_settings_org_role_mapping#role_assignments FederatedSettingsOrgRoleMapping#role_assignments}

---

### FederatedSettingsOrgRoleMappingRoleAssignments <a name="FederatedSettingsOrgRoleMappingRoleAssignments" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.federated_settings_org_role_mapping.FederatedSettingsOrgRoleMappingRoleAssignments;

FederatedSettingsOrgRoleMappingRoleAssignments.builder()
//  .groupId(java.lang.String)
//  .orgId(java.lang.String)
//  .roles(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments.property.groupId">groupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/federated_settings_org_role_mapping#group_id FederatedSettingsOrgRoleMapping#group_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments.property.orgId">orgId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/federated_settings_org_role_mapping#org_id FederatedSettingsOrgRoleMapping#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/federated_settings_org_role_mapping#roles FederatedSettingsOrgRoleMapping#roles}. |

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/federated_settings_org_role_mapping#group_id FederatedSettingsOrgRoleMapping#group_id}.

---

##### `orgId`<sup>Optional</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/federated_settings_org_role_mapping#org_id FederatedSettingsOrgRoleMapping#org_id}.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/federated_settings_org_role_mapping#roles FederatedSettingsOrgRoleMapping#roles}.

---

## Classes <a name="Classes" id="Classes"></a>

### FederatedSettingsOrgRoleMappingRoleAssignmentsList <a name="FederatedSettingsOrgRoleMappingRoleAssignmentsList" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.federated_settings_org_role_mapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList;

new FederatedSettingsOrgRoleMappingRoleAssignmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.get"></a>

```java
public FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments">FederatedSettingsOrgRoleMappingRoleAssignments</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments">FederatedSettingsOrgRoleMappingRoleAssignments</a>>

---


### FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference <a name="FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.federated_settings_org_role_mapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference;

new FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resetOrgId">resetOrgId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resetRoles">resetRoles</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetOrgId` <a name="resetOrgId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resetOrgId"></a>

```java
public void resetOrgId()
```

##### `resetRoles` <a name="resetRoles" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resetRoles"></a>

```java
public void resetRoles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.rolesInput">rolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments">FederatedSettingsOrgRoleMappingRoleAssignments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.rolesInput"></a>

```java
public java.util.List<java.lang.String> getRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgRoleMapping.FederatedSettingsOrgRoleMappingRoleAssignments">FederatedSettingsOrgRoleMappingRoleAssignments</a>

---



