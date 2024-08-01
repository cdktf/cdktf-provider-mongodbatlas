# `thirdPartyIntegration` Submodule <a name="`thirdPartyIntegration` Submodule" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ThirdPartyIntegration <a name="ThirdPartyIntegration" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration mongodbatlas_third_party_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.third_party_integration.ThirdPartyIntegration;

ThirdPartyIntegration.Builder.create(Construct scope, java.lang.String id)
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
    .type(java.lang.String)
//  .apiKey(java.lang.String)
//  .channelName(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .microsoftTeamsWebhookUrl(java.lang.String)
//  .password(java.lang.String)
//  .region(java.lang.String)
//  .routingKey(java.lang.String)
//  .scheme(java.lang.String)
//  .secret(java.lang.String)
//  .serviceDiscovery(java.lang.String)
//  .serviceKey(java.lang.String)
//  .teamName(java.lang.String)
//  .url(java.lang.String)
//  .userName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#project_id ThirdPartyIntegration#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#type ThirdPartyIntegration#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.apiKey">apiKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#api_key ThirdPartyIntegration#api_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.channelName">channelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#channel_name ThirdPartyIntegration#channel_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#enabled ThirdPartyIntegration#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.microsoftTeamsWebhookUrl">microsoftTeamsWebhookUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#microsoft_teams_webhook_url ThirdPartyIntegration#microsoft_teams_webhook_url}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#password ThirdPartyIntegration#password}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#region ThirdPartyIntegration#region}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.routingKey">routingKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#routing_key ThirdPartyIntegration#routing_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.scheme">scheme</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#scheme ThirdPartyIntegration#scheme}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.secret">secret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#secret ThirdPartyIntegration#secret}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.serviceDiscovery">serviceDiscovery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#service_discovery ThirdPartyIntegration#service_discovery}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.serviceKey">serviceKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#service_key ThirdPartyIntegration#service_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.teamName">teamName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#team_name ThirdPartyIntegration#team_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#url ThirdPartyIntegration#url}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#user_name ThirdPartyIntegration#user_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#project_id ThirdPartyIntegration#project_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#type ThirdPartyIntegration#type}.

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.apiKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#api_key ThirdPartyIntegration#api_key}.

---

##### `channelName`<sup>Optional</sup> <a name="channelName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.channelName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#channel_name ThirdPartyIntegration#channel_name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#enabled ThirdPartyIntegration#enabled}.

---

##### `microsoftTeamsWebhookUrl`<sup>Optional</sup> <a name="microsoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.microsoftTeamsWebhookUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#microsoft_teams_webhook_url ThirdPartyIntegration#microsoft_teams_webhook_url}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#password ThirdPartyIntegration#password}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#region ThirdPartyIntegration#region}.

---

##### `routingKey`<sup>Optional</sup> <a name="routingKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.routingKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#routing_key ThirdPartyIntegration#routing_key}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.scheme"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#scheme ThirdPartyIntegration#scheme}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.secret"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#secret ThirdPartyIntegration#secret}.

---

##### `serviceDiscovery`<sup>Optional</sup> <a name="serviceDiscovery" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.serviceDiscovery"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#service_discovery ThirdPartyIntegration#service_discovery}.

---

##### `serviceKey`<sup>Optional</sup> <a name="serviceKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.serviceKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#service_key ThirdPartyIntegration#service_key}.

---

##### `teamName`<sup>Optional</sup> <a name="teamName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.teamName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#team_name ThirdPartyIntegration#team_name}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.url"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#url ThirdPartyIntegration#url}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.Initializer.parameter.userName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#user_name ThirdPartyIntegration#user_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetChannelName">resetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetMicrosoftTeamsWebhookUrl">resetMicrosoftTeamsWebhookUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetRoutingKey">resetRoutingKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetScheme">resetScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetServiceDiscovery">resetServiceDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetServiceKey">resetServiceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetTeamName">resetTeamName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetApiKey` <a name="resetApiKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetApiKey"></a>

```java
public void resetApiKey()
```

##### `resetChannelName` <a name="resetChannelName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetChannelName"></a>

```java
public void resetChannelName()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetMicrosoftTeamsWebhookUrl` <a name="resetMicrosoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetMicrosoftTeamsWebhookUrl"></a>

```java
public void resetMicrosoftTeamsWebhookUrl()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRoutingKey` <a name="resetRoutingKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetRoutingKey"></a>

```java
public void resetRoutingKey()
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetScheme"></a>

```java
public void resetScheme()
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetSecret"></a>

```java
public void resetSecret()
```

##### `resetServiceDiscovery` <a name="resetServiceDiscovery" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetServiceDiscovery"></a>

```java
public void resetServiceDiscovery()
```

##### `resetServiceKey` <a name="resetServiceKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetServiceKey"></a>

```java
public void resetServiceKey()
```

##### `resetTeamName` <a name="resetTeamName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetTeamName"></a>

```java
public void resetTeamName()
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetUrl"></a>

```java
public void resetUrl()
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.resetUserName"></a>

```java
public void resetUserName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ThirdPartyIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.third_party_integration.ThirdPartyIntegration;

ThirdPartyIntegration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.third_party_integration.ThirdPartyIntegration;

ThirdPartyIntegration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.third_party_integration.ThirdPartyIntegration;

ThirdPartyIntegration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.third_party_integration.ThirdPartyIntegration;

ThirdPartyIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ThirdPartyIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ThirdPartyIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ThirdPartyIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ThirdPartyIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ThirdPartyIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiKeyInput">apiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.channelNameInput">channelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.microsoftTeamsWebhookUrlInput">microsoftTeamsWebhookUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.routingKeyInput">routingKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.schemeInput">schemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.secretInput">secretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceDiscoveryInput">serviceDiscoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceKeyInput">serviceKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.teamNameInput">teamNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.channelName">channelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.microsoftTeamsWebhookUrl">microsoftTeamsWebhookUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.routingKey">routingKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.scheme">scheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceDiscovery">serviceDiscovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceKey">serviceKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.teamName">teamName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiKeyInput"></a>

```java
public java.lang.String getApiKeyInput();
```

- *Type:* java.lang.String

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.channelNameInput"></a>

```java
public java.lang.String getChannelNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `microsoftTeamsWebhookUrlInput`<sup>Optional</sup> <a name="microsoftTeamsWebhookUrlInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.microsoftTeamsWebhookUrlInput"></a>

```java
public java.lang.String getMicrosoftTeamsWebhookUrlInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `routingKeyInput`<sup>Optional</sup> <a name="routingKeyInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.routingKeyInput"></a>

```java
public java.lang.String getRoutingKeyInput();
```

- *Type:* java.lang.String

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.schemeInput"></a>

```java
public java.lang.String getSchemeInput();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.secretInput"></a>

```java
public java.lang.String getSecretInput();
```

- *Type:* java.lang.String

---

##### `serviceDiscoveryInput`<sup>Optional</sup> <a name="serviceDiscoveryInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceDiscoveryInput"></a>

```java
public java.lang.String getServiceDiscoveryInput();
```

- *Type:* java.lang.String

---

##### `serviceKeyInput`<sup>Optional</sup> <a name="serviceKeyInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceKeyInput"></a>

```java
public java.lang.String getServiceKeyInput();
```

- *Type:* java.lang.String

---

##### `teamNameInput`<sup>Optional</sup> <a name="teamNameInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.teamNameInput"></a>

```java
public java.lang.String getTeamNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `microsoftTeamsWebhookUrl`<sup>Required</sup> <a name="microsoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.microsoftTeamsWebhookUrl"></a>

```java
public java.lang.String getMicrosoftTeamsWebhookUrl();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `routingKey`<sup>Required</sup> <a name="routingKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.routingKey"></a>

```java
public java.lang.String getRoutingKey();
```

- *Type:* java.lang.String

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `serviceDiscovery`<sup>Required</sup> <a name="serviceDiscovery" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceDiscovery"></a>

```java
public java.lang.String getServiceDiscovery();
```

- *Type:* java.lang.String

---

##### `serviceKey`<sup>Required</sup> <a name="serviceKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.serviceKey"></a>

```java
public java.lang.String getServiceKey();
```

- *Type:* java.lang.String

---

##### `teamName`<sup>Required</sup> <a name="teamName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.teamName"></a>

```java
public java.lang.String getTeamName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ThirdPartyIntegrationConfig <a name="ThirdPartyIntegrationConfig" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.third_party_integration.ThirdPartyIntegrationConfig;

ThirdPartyIntegrationConfig.builder()
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
    .type(java.lang.String)
//  .apiKey(java.lang.String)
//  .channelName(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .microsoftTeamsWebhookUrl(java.lang.String)
//  .password(java.lang.String)
//  .region(java.lang.String)
//  .routingKey(java.lang.String)
//  .scheme(java.lang.String)
//  .secret(java.lang.String)
//  .serviceDiscovery(java.lang.String)
//  .serviceKey(java.lang.String)
//  .teamName(java.lang.String)
//  .url(java.lang.String)
//  .userName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#project_id ThirdPartyIntegration#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#type ThirdPartyIntegration#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#api_key ThirdPartyIntegration#api_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.channelName">channelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#channel_name ThirdPartyIntegration#channel_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#enabled ThirdPartyIntegration#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.microsoftTeamsWebhookUrl">microsoftTeamsWebhookUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#microsoft_teams_webhook_url ThirdPartyIntegration#microsoft_teams_webhook_url}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#password ThirdPartyIntegration#password}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#region ThirdPartyIntegration#region}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.routingKey">routingKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#routing_key ThirdPartyIntegration#routing_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.scheme">scheme</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#scheme ThirdPartyIntegration#scheme}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.secret">secret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#secret ThirdPartyIntegration#secret}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.serviceDiscovery">serviceDiscovery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#service_discovery ThirdPartyIntegration#service_discovery}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.serviceKey">serviceKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#service_key ThirdPartyIntegration#service_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.teamName">teamName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#team_name ThirdPartyIntegration#team_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#url ThirdPartyIntegration#url}. |
| <code><a href="#@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#user_name ThirdPartyIntegration#user_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#project_id ThirdPartyIntegration#project_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#type ThirdPartyIntegration#type}.

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#api_key ThirdPartyIntegration#api_key}.

---

##### `channelName`<sup>Optional</sup> <a name="channelName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#channel_name ThirdPartyIntegration#channel_name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#enabled ThirdPartyIntegration#enabled}.

---

##### `microsoftTeamsWebhookUrl`<sup>Optional</sup> <a name="microsoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.microsoftTeamsWebhookUrl"></a>

```java
public java.lang.String getMicrosoftTeamsWebhookUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#microsoft_teams_webhook_url ThirdPartyIntegration#microsoft_teams_webhook_url}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#password ThirdPartyIntegration#password}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#region ThirdPartyIntegration#region}.

---

##### `routingKey`<sup>Optional</sup> <a name="routingKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.routingKey"></a>

```java
public java.lang.String getRoutingKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#routing_key ThirdPartyIntegration#routing_key}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#scheme ThirdPartyIntegration#scheme}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#secret ThirdPartyIntegration#secret}.

---

##### `serviceDiscovery`<sup>Optional</sup> <a name="serviceDiscovery" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.serviceDiscovery"></a>

```java
public java.lang.String getServiceDiscovery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#service_discovery ThirdPartyIntegration#service_discovery}.

---

##### `serviceKey`<sup>Optional</sup> <a name="serviceKey" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.serviceKey"></a>

```java
public java.lang.String getServiceKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#service_key ThirdPartyIntegration#service_key}.

---

##### `teamName`<sup>Optional</sup> <a name="teamName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.teamName"></a>

```java
public java.lang.String getTeamName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#team_name ThirdPartyIntegration#team_name}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#url ThirdPartyIntegration#url}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-mongodbatlas.thirdPartyIntegration.ThirdPartyIntegrationConfig.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/resources/third_party_integration#user_name ThirdPartyIntegration#user_name}.

---



