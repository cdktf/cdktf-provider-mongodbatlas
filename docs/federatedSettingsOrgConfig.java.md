# `mongodbatlas_federated_settings_org_config`

Refer to the Terraform Registory for docs: [`mongodbatlas_federated_settings_org_config`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config).

# `federatedSettingsOrgConfig` Submodule <a name="`federatedSettingsOrgConfig` Submodule" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FederatedSettingsOrgConfig <a name="FederatedSettingsOrgConfig" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config mongodbatlas_federated_settings_org_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.federated_settings_org_config.FederatedSettingsOrgConfig;

FederatedSettingsOrgConfig.Builder.create(Construct scope, java.lang.String id)
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
    .domainRestrictionEnabled(java.lang.Boolean)
    .domainRestrictionEnabled(IResolvable)
    .federationSettingsId(java.lang.String)
    .identityProviderId(java.lang.String)
    .orgId(java.lang.String)
//  .domainAllowList(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .postAuthRoleGrants(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.domainRestrictionEnabled">domainRestrictionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#domain_restriction_enabled FederatedSettingsOrgConfig#domain_restriction_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.federationSettingsId">federationSettingsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#federation_settings_id FederatedSettingsOrgConfig#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#identity_provider_id FederatedSettingsOrgConfig#identity_provider_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#org_id FederatedSettingsOrgConfig#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.domainAllowList">domainAllowList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#domain_allow_list FederatedSettingsOrgConfig#domain_allow_list}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#id FederatedSettingsOrgConfig#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.postAuthRoleGrants">postAuthRoleGrants</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#post_auth_role_grants FederatedSettingsOrgConfig#post_auth_role_grants}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainRestrictionEnabled`<sup>Required</sup> <a name="domainRestrictionEnabled" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.domainRestrictionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#domain_restriction_enabled FederatedSettingsOrgConfig#domain_restriction_enabled}.

---

##### `federationSettingsId`<sup>Required</sup> <a name="federationSettingsId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.federationSettingsId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#federation_settings_id FederatedSettingsOrgConfig#federation_settings_id}.

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.identityProviderId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#identity_provider_id FederatedSettingsOrgConfig#identity_provider_id}.

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#org_id FederatedSettingsOrgConfig#org_id}.

---

##### `domainAllowList`<sup>Optional</sup> <a name="domainAllowList" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.domainAllowList"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#domain_allow_list FederatedSettingsOrgConfig#domain_allow_list}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#id FederatedSettingsOrgConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `postAuthRoleGrants`<sup>Optional</sup> <a name="postAuthRoleGrants" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.Initializer.parameter.postAuthRoleGrants"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#post_auth_role_grants FederatedSettingsOrgConfig#post_auth_role_grants}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetDomainAllowList">resetDomainAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetPostAuthRoleGrants">resetPostAuthRoleGrants</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDomainAllowList` <a name="resetDomainAllowList" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetDomainAllowList"></a>

```java
public void resetDomainAllowList()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetId"></a>

```java
public void resetId()
```

##### `resetPostAuthRoleGrants` <a name="resetPostAuthRoleGrants" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.resetPostAuthRoleGrants"></a>

```java
public void resetPostAuthRoleGrants()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.federated_settings_org_config.FederatedSettingsOrgConfig;

FederatedSettingsOrgConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.federated_settings_org_config.FederatedSettingsOrgConfig;

FederatedSettingsOrgConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.federated_settings_org_config.FederatedSettingsOrgConfig;

FederatedSettingsOrgConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainAllowListInput">domainAllowListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainRestrictionEnabledInput">domainRestrictionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.federationSettingsIdInput">federationSettingsIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.postAuthRoleGrantsInput">postAuthRoleGrantsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainAllowList">domainAllowList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainRestrictionEnabled">domainRestrictionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.federationSettingsId">federationSettingsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.postAuthRoleGrants">postAuthRoleGrants</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainAllowListInput`<sup>Optional</sup> <a name="domainAllowListInput" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainAllowListInput"></a>

```java
public java.util.List<java.lang.String> getDomainAllowListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainRestrictionEnabledInput`<sup>Optional</sup> <a name="domainRestrictionEnabledInput" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainRestrictionEnabledInput"></a>

```java
public java.lang.Object getDomainRestrictionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `federationSettingsIdInput`<sup>Optional</sup> <a name="federationSettingsIdInput" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.federationSettingsIdInput"></a>

```java
public java.lang.String getFederationSettingsIdInput();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `postAuthRoleGrantsInput`<sup>Optional</sup> <a name="postAuthRoleGrantsInput" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.postAuthRoleGrantsInput"></a>

```java
public java.util.List<java.lang.String> getPostAuthRoleGrantsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainAllowList`<sup>Required</sup> <a name="domainAllowList" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainAllowList"></a>

```java
public java.util.List<java.lang.String> getDomainAllowList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainRestrictionEnabled`<sup>Required</sup> <a name="domainRestrictionEnabled" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.domainRestrictionEnabled"></a>

```java
public java.lang.Object getDomainRestrictionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `federationSettingsId`<sup>Required</sup> <a name="federationSettingsId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.federationSettingsId"></a>

```java
public java.lang.String getFederationSettingsId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

##### `postAuthRoleGrants`<sup>Required</sup> <a name="postAuthRoleGrants" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.postAuthRoleGrants"></a>

```java
public java.util.List<java.lang.String> getPostAuthRoleGrants();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FederatedSettingsOrgConfigConfig <a name="FederatedSettingsOrgConfigConfig" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.federated_settings_org_config.FederatedSettingsOrgConfigConfig;

FederatedSettingsOrgConfigConfig.builder()
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
    .domainRestrictionEnabled(java.lang.Boolean)
    .domainRestrictionEnabled(IResolvable)
    .federationSettingsId(java.lang.String)
    .identityProviderId(java.lang.String)
    .orgId(java.lang.String)
//  .domainAllowList(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .postAuthRoleGrants(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.domainRestrictionEnabled">domainRestrictionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#domain_restriction_enabled FederatedSettingsOrgConfig#domain_restriction_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.federationSettingsId">federationSettingsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#federation_settings_id FederatedSettingsOrgConfig#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#identity_provider_id FederatedSettingsOrgConfig#identity_provider_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#org_id FederatedSettingsOrgConfig#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.domainAllowList">domainAllowList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#domain_allow_list FederatedSettingsOrgConfig#domain_allow_list}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#id FederatedSettingsOrgConfig#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.postAuthRoleGrants">postAuthRoleGrants</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#post_auth_role_grants FederatedSettingsOrgConfig#post_auth_role_grants}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainRestrictionEnabled`<sup>Required</sup> <a name="domainRestrictionEnabled" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.domainRestrictionEnabled"></a>

```java
public java.lang.Object getDomainRestrictionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#domain_restriction_enabled FederatedSettingsOrgConfig#domain_restriction_enabled}.

---

##### `federationSettingsId`<sup>Required</sup> <a name="federationSettingsId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.federationSettingsId"></a>

```java
public java.lang.String getFederationSettingsId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#federation_settings_id FederatedSettingsOrgConfig#federation_settings_id}.

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#identity_provider_id FederatedSettingsOrgConfig#identity_provider_id}.

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#org_id FederatedSettingsOrgConfig#org_id}.

---

##### `domainAllowList`<sup>Optional</sup> <a name="domainAllowList" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.domainAllowList"></a>

```java
public java.util.List<java.lang.String> getDomainAllowList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#domain_allow_list FederatedSettingsOrgConfig#domain_allow_list}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#id FederatedSettingsOrgConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `postAuthRoleGrants`<sup>Optional</sup> <a name="postAuthRoleGrants" id="@cdktf/provider-mongodbatlas.federatedSettingsOrgConfig.FederatedSettingsOrgConfigConfig.property.postAuthRoleGrants"></a>

```java
public java.util.List<java.lang.String> getPostAuthRoleGrants();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/federated_settings_org_config#post_auth_role_grants FederatedSettingsOrgConfig#post_auth_role_grants}.

---



