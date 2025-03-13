# `federatedSettingsIdentityProvider` Submodule <a name="`federatedSettingsIdentityProvider` Submodule" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FederatedSettingsIdentityProvider <a name="FederatedSettingsIdentityProvider" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider mongodbatlas_federated_settings_identity_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.federated_settings_identity_provider.FederatedSettingsIdentityProvider;

FederatedSettingsIdentityProvider.Builder.create(Construct scope, java.lang.String id)
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
    .federationSettingsId(java.lang.String)
    .issuerUri(java.lang.String)
    .name(java.lang.String)
//  .associatedDomains(java.util.List<java.lang.String>)
//  .audience(java.lang.String)
//  .authorizationType(java.lang.String)
//  .clientId(java.lang.String)
//  .description(java.lang.String)
//  .groupsClaim(java.lang.String)
//  .id(java.lang.String)
//  .idpType(java.lang.String)
//  .protocol(java.lang.String)
//  .requestBinding(java.lang.String)
//  .requestedScopes(java.util.List<java.lang.String>)
//  .responseSignatureAlgorithm(java.lang.String)
//  .ssoDebugEnabled(java.lang.Boolean)
//  .ssoDebugEnabled(IResolvable)
//  .ssoUrl(java.lang.String)
//  .status(java.lang.String)
//  .userClaim(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.federationSettingsId">federationSettingsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#federation_settings_id FederatedSettingsIdentityProvider#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.issuerUri">issuerUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#issuer_uri FederatedSettingsIdentityProvider#issuer_uri}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#name FederatedSettingsIdentityProvider#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.associatedDomains">associatedDomains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#associated_domains FederatedSettingsIdentityProvider#associated_domains}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.audience">audience</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#audience FederatedSettingsIdentityProvider#audience}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#authorization_type FederatedSettingsIdentityProvider#authorization_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#client_id FederatedSettingsIdentityProvider#client_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#description FederatedSettingsIdentityProvider#description}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.groupsClaim">groupsClaim</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#groups_claim FederatedSettingsIdentityProvider#groups_claim}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#id FederatedSettingsIdentityProvider#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.idpType">idpType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#idp_type FederatedSettingsIdentityProvider#idp_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#protocol FederatedSettingsIdentityProvider#protocol}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.requestBinding">requestBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#request_binding FederatedSettingsIdentityProvider#request_binding}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.requestedScopes">requestedScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#requested_scopes FederatedSettingsIdentityProvider#requested_scopes}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.responseSignatureAlgorithm">responseSignatureAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#response_signature_algorithm FederatedSettingsIdentityProvider#response_signature_algorithm}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.ssoDebugEnabled">ssoDebugEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#sso_debug_enabled FederatedSettingsIdentityProvider#sso_debug_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.ssoUrl">ssoUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#sso_url FederatedSettingsIdentityProvider#sso_url}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#status FederatedSettingsIdentityProvider#status}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.userClaim">userClaim</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#user_claim FederatedSettingsIdentityProvider#user_claim}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `federationSettingsId`<sup>Required</sup> <a name="federationSettingsId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.federationSettingsId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#federation_settings_id FederatedSettingsIdentityProvider#federation_settings_id}.

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.issuerUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#issuer_uri FederatedSettingsIdentityProvider#issuer_uri}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#name FederatedSettingsIdentityProvider#name}.

---

##### `associatedDomains`<sup>Optional</sup> <a name="associatedDomains" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.associatedDomains"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#associated_domains FederatedSettingsIdentityProvider#associated_domains}.

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.audience"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#audience FederatedSettingsIdentityProvider#audience}.

---

##### `authorizationType`<sup>Optional</sup> <a name="authorizationType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.authorizationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#authorization_type FederatedSettingsIdentityProvider#authorization_type}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#client_id FederatedSettingsIdentityProvider#client_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#description FederatedSettingsIdentityProvider#description}.

---

##### `groupsClaim`<sup>Optional</sup> <a name="groupsClaim" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.groupsClaim"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#groups_claim FederatedSettingsIdentityProvider#groups_claim}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#id FederatedSettingsIdentityProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpType`<sup>Optional</sup> <a name="idpType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.idpType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#idp_type FederatedSettingsIdentityProvider#idp_type}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#protocol FederatedSettingsIdentityProvider#protocol}.

---

##### `requestBinding`<sup>Optional</sup> <a name="requestBinding" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.requestBinding"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#request_binding FederatedSettingsIdentityProvider#request_binding}.

---

##### `requestedScopes`<sup>Optional</sup> <a name="requestedScopes" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.requestedScopes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#requested_scopes FederatedSettingsIdentityProvider#requested_scopes}.

---

##### `responseSignatureAlgorithm`<sup>Optional</sup> <a name="responseSignatureAlgorithm" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.responseSignatureAlgorithm"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#response_signature_algorithm FederatedSettingsIdentityProvider#response_signature_algorithm}.

---

##### `ssoDebugEnabled`<sup>Optional</sup> <a name="ssoDebugEnabled" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.ssoDebugEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#sso_debug_enabled FederatedSettingsIdentityProvider#sso_debug_enabled}.

---

##### `ssoUrl`<sup>Optional</sup> <a name="ssoUrl" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.ssoUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#sso_url FederatedSettingsIdentityProvider#sso_url}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#status FederatedSettingsIdentityProvider#status}.

---

##### `userClaim`<sup>Optional</sup> <a name="userClaim" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.Initializer.parameter.userClaim"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#user_claim FederatedSettingsIdentityProvider#user_claim}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetAssociatedDomains">resetAssociatedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetAuthorizationType">resetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetGroupsClaim">resetGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetIdpType">resetIdpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetRequestBinding">resetRequestBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetRequestedScopes">resetRequestedScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetResponseSignatureAlgorithm">resetResponseSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetSsoDebugEnabled">resetSsoDebugEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetSsoUrl">resetSsoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetUserClaim">resetUserClaim</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAssociatedDomains` <a name="resetAssociatedDomains" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetAssociatedDomains"></a>

```java
public void resetAssociatedDomains()
```

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetAudience"></a>

```java
public void resetAudience()
```

##### `resetAuthorizationType` <a name="resetAuthorizationType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetAuthorizationType"></a>

```java
public void resetAuthorizationType()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGroupsClaim` <a name="resetGroupsClaim" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetGroupsClaim"></a>

```java
public void resetGroupsClaim()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetId"></a>

```java
public void resetId()
```

##### `resetIdpType` <a name="resetIdpType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetIdpType"></a>

```java
public void resetIdpType()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetRequestBinding` <a name="resetRequestBinding" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetRequestBinding"></a>

```java
public void resetRequestBinding()
```

##### `resetRequestedScopes` <a name="resetRequestedScopes" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetRequestedScopes"></a>

```java
public void resetRequestedScopes()
```

##### `resetResponseSignatureAlgorithm` <a name="resetResponseSignatureAlgorithm" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetResponseSignatureAlgorithm"></a>

```java
public void resetResponseSignatureAlgorithm()
```

##### `resetSsoDebugEnabled` <a name="resetSsoDebugEnabled" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetSsoDebugEnabled"></a>

```java
public void resetSsoDebugEnabled()
```

##### `resetSsoUrl` <a name="resetSsoUrl" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetSsoUrl"></a>

```java
public void resetSsoUrl()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetUserClaim` <a name="resetUserClaim" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.resetUserClaim"></a>

```java
public void resetUserClaim()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FederatedSettingsIdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.federated_settings_identity_provider.FederatedSettingsIdentityProvider;

FederatedSettingsIdentityProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.federated_settings_identity_provider.FederatedSettingsIdentityProvider;

FederatedSettingsIdentityProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.federated_settings_identity_provider.FederatedSettingsIdentityProvider;

FederatedSettingsIdentityProvider.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.federated_settings_identity_provider.FederatedSettingsIdentityProvider;

FederatedSettingsIdentityProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FederatedSettingsIdentityProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FederatedSettingsIdentityProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FederatedSettingsIdentityProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FederatedSettingsIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FederatedSettingsIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idpId">idpId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.oktaIdpId">oktaIdpId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.associatedDomainsInput">associatedDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.audienceInput">audienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.authorizationTypeInput">authorizationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.federationSettingsIdInput">federationSettingsIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.groupsClaimInput">groupsClaimInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idpTypeInput">idpTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.issuerUriInput">issuerUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestBindingInput">requestBindingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestedScopesInput">requestedScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.responseSignatureAlgorithmInput">responseSignatureAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoDebugEnabledInput">ssoDebugEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoUrlInput">ssoUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.userClaimInput">userClaimInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.associatedDomains">associatedDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.audience">audience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.federationSettingsId">federationSettingsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.groupsClaim">groupsClaim</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idpType">idpType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.issuerUri">issuerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestBinding">requestBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestedScopes">requestedScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.responseSignatureAlgorithm">responseSignatureAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoDebugEnabled">ssoDebugEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoUrl">ssoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.userClaim">userClaim</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idpId`<sup>Required</sup> <a name="idpId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idpId"></a>

```java
public java.lang.String getIdpId();
```

- *Type:* java.lang.String

---

##### `oktaIdpId`<sup>Required</sup> <a name="oktaIdpId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.oktaIdpId"></a>

```java
public java.lang.String getOktaIdpId();
```

- *Type:* java.lang.String

---

##### `associatedDomainsInput`<sup>Optional</sup> <a name="associatedDomainsInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.associatedDomainsInput"></a>

```java
public java.util.List<java.lang.String> getAssociatedDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.audienceInput"></a>

```java
public java.lang.String getAudienceInput();
```

- *Type:* java.lang.String

---

##### `authorizationTypeInput`<sup>Optional</sup> <a name="authorizationTypeInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.authorizationTypeInput"></a>

```java
public java.lang.String getAuthorizationTypeInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `federationSettingsIdInput`<sup>Optional</sup> <a name="federationSettingsIdInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.federationSettingsIdInput"></a>

```java
public java.lang.String getFederationSettingsIdInput();
```

- *Type:* java.lang.String

---

##### `groupsClaimInput`<sup>Optional</sup> <a name="groupsClaimInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.groupsClaimInput"></a>

```java
public java.lang.String getGroupsClaimInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idpTypeInput`<sup>Optional</sup> <a name="idpTypeInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idpTypeInput"></a>

```java
public java.lang.String getIdpTypeInput();
```

- *Type:* java.lang.String

---

##### `issuerUriInput`<sup>Optional</sup> <a name="issuerUriInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.issuerUriInput"></a>

```java
public java.lang.String getIssuerUriInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `requestBindingInput`<sup>Optional</sup> <a name="requestBindingInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestBindingInput"></a>

```java
public java.lang.String getRequestBindingInput();
```

- *Type:* java.lang.String

---

##### `requestedScopesInput`<sup>Optional</sup> <a name="requestedScopesInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestedScopesInput"></a>

```java
public java.util.List<java.lang.String> getRequestedScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `responseSignatureAlgorithmInput`<sup>Optional</sup> <a name="responseSignatureAlgorithmInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.responseSignatureAlgorithmInput"></a>

```java
public java.lang.String getResponseSignatureAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `ssoDebugEnabledInput`<sup>Optional</sup> <a name="ssoDebugEnabledInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoDebugEnabledInput"></a>

```java
public java.lang.Object getSsoDebugEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ssoUrlInput`<sup>Optional</sup> <a name="ssoUrlInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoUrlInput"></a>

```java
public java.lang.String getSsoUrlInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `userClaimInput`<sup>Optional</sup> <a name="userClaimInput" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.userClaimInput"></a>

```java
public java.lang.String getUserClaimInput();
```

- *Type:* java.lang.String

---

##### `associatedDomains`<sup>Required</sup> <a name="associatedDomains" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.associatedDomains"></a>

```java
public java.util.List<java.lang.String> getAssociatedDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `federationSettingsId`<sup>Required</sup> <a name="federationSettingsId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.federationSettingsId"></a>

```java
public java.lang.String getFederationSettingsId();
```

- *Type:* java.lang.String

---

##### `groupsClaim`<sup>Required</sup> <a name="groupsClaim" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.groupsClaim"></a>

```java
public java.lang.String getGroupsClaim();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idpType`<sup>Required</sup> <a name="idpType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.idpType"></a>

```java
public java.lang.String getIdpType();
```

- *Type:* java.lang.String

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.issuerUri"></a>

```java
public java.lang.String getIssuerUri();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `requestBinding`<sup>Required</sup> <a name="requestBinding" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestBinding"></a>

```java
public java.lang.String getRequestBinding();
```

- *Type:* java.lang.String

---

##### `requestedScopes`<sup>Required</sup> <a name="requestedScopes" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.requestedScopes"></a>

```java
public java.util.List<java.lang.String> getRequestedScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `responseSignatureAlgorithm`<sup>Required</sup> <a name="responseSignatureAlgorithm" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.responseSignatureAlgorithm"></a>

```java
public java.lang.String getResponseSignatureAlgorithm();
```

- *Type:* java.lang.String

---

##### `ssoDebugEnabled`<sup>Required</sup> <a name="ssoDebugEnabled" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoDebugEnabled"></a>

```java
public java.lang.Object getSsoDebugEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ssoUrl`<sup>Required</sup> <a name="ssoUrl" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.ssoUrl"></a>

```java
public java.lang.String getSsoUrl();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `userClaim`<sup>Required</sup> <a name="userClaim" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.userClaim"></a>

```java
public java.lang.String getUserClaim();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FederatedSettingsIdentityProviderConfig <a name="FederatedSettingsIdentityProviderConfig" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.federated_settings_identity_provider.FederatedSettingsIdentityProviderConfig;

FederatedSettingsIdentityProviderConfig.builder()
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
    .federationSettingsId(java.lang.String)
    .issuerUri(java.lang.String)
    .name(java.lang.String)
//  .associatedDomains(java.util.List<java.lang.String>)
//  .audience(java.lang.String)
//  .authorizationType(java.lang.String)
//  .clientId(java.lang.String)
//  .description(java.lang.String)
//  .groupsClaim(java.lang.String)
//  .id(java.lang.String)
//  .idpType(java.lang.String)
//  .protocol(java.lang.String)
//  .requestBinding(java.lang.String)
//  .requestedScopes(java.util.List<java.lang.String>)
//  .responseSignatureAlgorithm(java.lang.String)
//  .ssoDebugEnabled(java.lang.Boolean)
//  .ssoDebugEnabled(IResolvable)
//  .ssoUrl(java.lang.String)
//  .status(java.lang.String)
//  .userClaim(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.federationSettingsId">federationSettingsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#federation_settings_id FederatedSettingsIdentityProvider#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.issuerUri">issuerUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#issuer_uri FederatedSettingsIdentityProvider#issuer_uri}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#name FederatedSettingsIdentityProvider#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.associatedDomains">associatedDomains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#associated_domains FederatedSettingsIdentityProvider#associated_domains}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.audience">audience</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#audience FederatedSettingsIdentityProvider#audience}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#authorization_type FederatedSettingsIdentityProvider#authorization_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#client_id FederatedSettingsIdentityProvider#client_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#description FederatedSettingsIdentityProvider#description}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.groupsClaim">groupsClaim</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#groups_claim FederatedSettingsIdentityProvider#groups_claim}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#id FederatedSettingsIdentityProvider#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.idpType">idpType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#idp_type FederatedSettingsIdentityProvider#idp_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#protocol FederatedSettingsIdentityProvider#protocol}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.requestBinding">requestBinding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#request_binding FederatedSettingsIdentityProvider#request_binding}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.requestedScopes">requestedScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#requested_scopes FederatedSettingsIdentityProvider#requested_scopes}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.responseSignatureAlgorithm">responseSignatureAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#response_signature_algorithm FederatedSettingsIdentityProvider#response_signature_algorithm}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.ssoDebugEnabled">ssoDebugEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#sso_debug_enabled FederatedSettingsIdentityProvider#sso_debug_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.ssoUrl">ssoUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#sso_url FederatedSettingsIdentityProvider#sso_url}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#status FederatedSettingsIdentityProvider#status}. |
| <code><a href="#@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.userClaim">userClaim</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#user_claim FederatedSettingsIdentityProvider#user_claim}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `federationSettingsId`<sup>Required</sup> <a name="federationSettingsId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.federationSettingsId"></a>

```java
public java.lang.String getFederationSettingsId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#federation_settings_id FederatedSettingsIdentityProvider#federation_settings_id}.

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.issuerUri"></a>

```java
public java.lang.String getIssuerUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#issuer_uri FederatedSettingsIdentityProvider#issuer_uri}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#name FederatedSettingsIdentityProvider#name}.

---

##### `associatedDomains`<sup>Optional</sup> <a name="associatedDomains" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.associatedDomains"></a>

```java
public java.util.List<java.lang.String> getAssociatedDomains();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#associated_domains FederatedSettingsIdentityProvider#associated_domains}.

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#audience FederatedSettingsIdentityProvider#audience}.

---

##### `authorizationType`<sup>Optional</sup> <a name="authorizationType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#authorization_type FederatedSettingsIdentityProvider#authorization_type}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#client_id FederatedSettingsIdentityProvider#client_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#description FederatedSettingsIdentityProvider#description}.

---

##### `groupsClaim`<sup>Optional</sup> <a name="groupsClaim" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.groupsClaim"></a>

```java
public java.lang.String getGroupsClaim();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#groups_claim FederatedSettingsIdentityProvider#groups_claim}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#id FederatedSettingsIdentityProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpType`<sup>Optional</sup> <a name="idpType" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.idpType"></a>

```java
public java.lang.String getIdpType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#idp_type FederatedSettingsIdentityProvider#idp_type}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#protocol FederatedSettingsIdentityProvider#protocol}.

---

##### `requestBinding`<sup>Optional</sup> <a name="requestBinding" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.requestBinding"></a>

```java
public java.lang.String getRequestBinding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#request_binding FederatedSettingsIdentityProvider#request_binding}.

---

##### `requestedScopes`<sup>Optional</sup> <a name="requestedScopes" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.requestedScopes"></a>

```java
public java.util.List<java.lang.String> getRequestedScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#requested_scopes FederatedSettingsIdentityProvider#requested_scopes}.

---

##### `responseSignatureAlgorithm`<sup>Optional</sup> <a name="responseSignatureAlgorithm" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.responseSignatureAlgorithm"></a>

```java
public java.lang.String getResponseSignatureAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#response_signature_algorithm FederatedSettingsIdentityProvider#response_signature_algorithm}.

---

##### `ssoDebugEnabled`<sup>Optional</sup> <a name="ssoDebugEnabled" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.ssoDebugEnabled"></a>

```java
public java.lang.Object getSsoDebugEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#sso_debug_enabled FederatedSettingsIdentityProvider#sso_debug_enabled}.

---

##### `ssoUrl`<sup>Optional</sup> <a name="ssoUrl" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.ssoUrl"></a>

```java
public java.lang.String getSsoUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#sso_url FederatedSettingsIdentityProvider#sso_url}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#status FederatedSettingsIdentityProvider#status}.

---

##### `userClaim`<sup>Optional</sup> <a name="userClaim" id="@cdktf/provider-mongodbatlas.federatedSettingsIdentityProvider.FederatedSettingsIdentityProviderConfig.property.userClaim"></a>

```java
public java.lang.String getUserClaim();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.29.0/docs/resources/federated_settings_identity_provider#user_claim FederatedSettingsIdentityProvider#user_claim}.

---



