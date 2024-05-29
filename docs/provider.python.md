# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-mongodbatlas.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MongodbatlasProvider <a name="MongodbatlasProvider" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs mongodbatlas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import provider

provider.MongodbatlasProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  assume_role: typing.Union[IResolvable, typing.List[MongodbatlasProviderAssumeRole]] = None,
  aws_access_key_id: str = None,
  aws_secret_access_key: str = None,
  aws_session_token: str = None,
  base_url: str = None,
  is_mongodbgov_cloud: typing.Union[bool, IResolvable] = None,
  private_key: str = None,
  public_key: str = None,
  realm_base_url: str = None,
  region: str = None,
  secret_name: str = None,
  sts_endpoint: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.assumeRole">assume_role</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole">MongodbatlasProviderAssumeRole</a>]]</code> | assume_role block. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.awsAccessKeyId">aws_access_key_id</a></code> | <code>str</code> | AWS API Access Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.awsSecretAccessKey">aws_secret_access_key</a></code> | <code>str</code> | AWS API Access Secret Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.awsSessionToken">aws_session_token</a></code> | <code>str</code> | AWS Security Token Service provided session token. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.baseUrl">base_url</a></code> | <code>str</code> | MongoDB Atlas Base URL. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.isMongodbgovCloud">is_mongodbgov_cloud</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | MongoDB Atlas Base URL default to gov. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.privateKey">private_key</a></code> | <code>str</code> | MongoDB Atlas Programmatic Private Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.publicKey">public_key</a></code> | <code>str</code> | MongoDB Atlas Programmatic Public Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.realmBaseUrl">realm_base_url</a></code> | <code>str</code> | MongoDB Realm Base URL. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where secret is stored as part of AWS Secret Manager. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.secretName">secret_name</a></code> | <code>str</code> | Name of secret stored in AWS Secret Manager. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.stsEndpoint">sts_endpoint</a></code> | <code>str</code> | AWS Security Token Service endpoint. Required for cross-AWS region or cross-AWS account secrets. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#alias MongodbatlasProvider#alias}

---

##### `assume_role`<sup>Optional</sup> <a name="assume_role" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.assumeRole"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole">MongodbatlasProviderAssumeRole</a>]]

assume_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#assume_role MongodbatlasProvider#assume_role}

---

##### `aws_access_key_id`<sup>Optional</sup> <a name="aws_access_key_id" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.awsAccessKeyId"></a>

- *Type:* str

AWS API Access Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#aws_access_key_id MongodbatlasProvider#aws_access_key_id}

---

##### `aws_secret_access_key`<sup>Optional</sup> <a name="aws_secret_access_key" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.awsSecretAccessKey"></a>

- *Type:* str

AWS API Access Secret Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#aws_secret_access_key MongodbatlasProvider#aws_secret_access_key}

---

##### `aws_session_token`<sup>Optional</sup> <a name="aws_session_token" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.awsSessionToken"></a>

- *Type:* str

AWS Security Token Service provided session token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#aws_session_token MongodbatlasProvider#aws_session_token}

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.baseUrl"></a>

- *Type:* str

MongoDB Atlas Base URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#base_url MongodbatlasProvider#base_url}

---

##### `is_mongodbgov_cloud`<sup>Optional</sup> <a name="is_mongodbgov_cloud" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.isMongodbgovCloud"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

MongoDB Atlas Base URL default to gov.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#is_mongodbgov_cloud MongodbatlasProvider#is_mongodbgov_cloud}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.privateKey"></a>

- *Type:* str

MongoDB Atlas Programmatic Private Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#private_key MongodbatlasProvider#private_key}

---

##### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.publicKey"></a>

- *Type:* str

MongoDB Atlas Programmatic Public Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#public_key MongodbatlasProvider#public_key}

---

##### `realm_base_url`<sup>Optional</sup> <a name="realm_base_url" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.realmBaseUrl"></a>

- *Type:* str

MongoDB Realm Base URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#realm_base_url MongodbatlasProvider#realm_base_url}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.region"></a>

- *Type:* str

Region where secret is stored as part of AWS Secret Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#region MongodbatlasProvider#region}

---

##### `secret_name`<sup>Optional</sup> <a name="secret_name" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.secretName"></a>

- *Type:* str

Name of secret stored in AWS Secret Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#secret_name MongodbatlasProvider#secret_name}

---

##### `sts_endpoint`<sup>Optional</sup> <a name="sts_endpoint" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.Initializer.parameter.stsEndpoint"></a>

- *Type:* str

AWS Security Token Service endpoint. Required for cross-AWS region or cross-AWS account secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#sts_endpoint MongodbatlasProvider#sts_endpoint}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAssumeRole">reset_assume_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsAccessKeyId">reset_aws_access_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsSecretAccessKey">reset_aws_secret_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsSessionToken">reset_aws_session_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetBaseUrl">reset_base_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetIsMongodbgovCloud">reset_is_mongodbgov_cloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetPrivateKey">reset_private_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetPublicKey">reset_public_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetRealmBaseUrl">reset_realm_base_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetSecretName">reset_secret_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetStsEndpoint">reset_sts_endpoint</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_assume_role` <a name="reset_assume_role" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAssumeRole"></a>

```python
def reset_assume_role() -> None
```

##### `reset_aws_access_key_id` <a name="reset_aws_access_key_id" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsAccessKeyId"></a>

```python
def reset_aws_access_key_id() -> None
```

##### `reset_aws_secret_access_key` <a name="reset_aws_secret_access_key" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsSecretAccessKey"></a>

```python
def reset_aws_secret_access_key() -> None
```

##### `reset_aws_session_token` <a name="reset_aws_session_token" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetAwsSessionToken"></a>

```python
def reset_aws_session_token() -> None
```

##### `reset_base_url` <a name="reset_base_url" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetBaseUrl"></a>

```python
def reset_base_url() -> None
```

##### `reset_is_mongodbgov_cloud` <a name="reset_is_mongodbgov_cloud" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetIsMongodbgovCloud"></a>

```python
def reset_is_mongodbgov_cloud() -> None
```

##### `reset_private_key` <a name="reset_private_key" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetPrivateKey"></a>

```python
def reset_private_key() -> None
```

##### `reset_public_key` <a name="reset_public_key" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetPublicKey"></a>

```python
def reset_public_key() -> None
```

##### `reset_realm_base_url` <a name="reset_realm_base_url" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetRealmBaseUrl"></a>

```python
def reset_realm_base_url() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_secret_name` <a name="reset_secret_name" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetSecretName"></a>

```python
def reset_secret_name() -> None
```

##### `reset_sts_endpoint` <a name="reset_sts_endpoint" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.resetStsEndpoint"></a>

```python
def reset_sts_endpoint() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MongodbatlasProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import provider

provider.MongodbatlasProvider.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import provider

provider.MongodbatlasProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import provider

provider.MongodbatlasProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import provider

provider.MongodbatlasProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MongodbatlasProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MongodbatlasProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MongodbatlasProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MongodbatlasProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.assumeRoleInput">assume_role_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole">MongodbatlasProviderAssumeRole</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsAccessKeyIdInput">aws_access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSecretAccessKeyInput">aws_secret_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSessionTokenInput">aws_session_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.baseUrlInput">base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.isMongodbgovCloudInput">is_mongodbgov_cloud_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.publicKeyInput">public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.realmBaseUrlInput">realm_base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.stsEndpointInput">sts_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.assumeRole">assume_role</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole">MongodbatlasProviderAssumeRole</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsAccessKeyId">aws_access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSecretAccessKey">aws_secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSessionToken">aws_session_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.isMongodbgovCloud">is_mongodbgov_cloud</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.realmBaseUrl">realm_base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.stsEndpoint">sts_endpoint</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `assume_role_input`<sup>Optional</sup> <a name="assume_role_input" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.assumeRoleInput"></a>

```python
assume_role_input: typing.Union[IResolvable, typing.List[MongodbatlasProviderAssumeRole]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole">MongodbatlasProviderAssumeRole</a>]]

---

##### `aws_access_key_id_input`<sup>Optional</sup> <a name="aws_access_key_id_input" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsAccessKeyIdInput"></a>

```python
aws_access_key_id_input: str
```

- *Type:* str

---

##### `aws_secret_access_key_input`<sup>Optional</sup> <a name="aws_secret_access_key_input" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSecretAccessKeyInput"></a>

```python
aws_secret_access_key_input: str
```

- *Type:* str

---

##### `aws_session_token_input`<sup>Optional</sup> <a name="aws_session_token_input" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSessionTokenInput"></a>

```python
aws_session_token_input: str
```

- *Type:* str

---

##### `base_url_input`<sup>Optional</sup> <a name="base_url_input" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.baseUrlInput"></a>

```python
base_url_input: str
```

- *Type:* str

---

##### `is_mongodbgov_cloud_input`<sup>Optional</sup> <a name="is_mongodbgov_cloud_input" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.isMongodbgovCloudInput"></a>

```python
is_mongodbgov_cloud_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `public_key_input`<sup>Optional</sup> <a name="public_key_input" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.publicKeyInput"></a>

```python
public_key_input: str
```

- *Type:* str

---

##### `realm_base_url_input`<sup>Optional</sup> <a name="realm_base_url_input" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.realmBaseUrlInput"></a>

```python
realm_base_url_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `sts_endpoint_input`<sup>Optional</sup> <a name="sts_endpoint_input" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.stsEndpointInput"></a>

```python
sts_endpoint_input: str
```

- *Type:* str

---

##### `assume_role`<sup>Optional</sup> <a name="assume_role" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.assumeRole"></a>

```python
assume_role: typing.Union[IResolvable, typing.List[MongodbatlasProviderAssumeRole]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole">MongodbatlasProviderAssumeRole</a>]]

---

##### `aws_access_key_id`<sup>Optional</sup> <a name="aws_access_key_id" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsAccessKeyId"></a>

```python
aws_access_key_id: str
```

- *Type:* str

---

##### `aws_secret_access_key`<sup>Optional</sup> <a name="aws_secret_access_key" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSecretAccessKey"></a>

```python
aws_secret_access_key: str
```

- *Type:* str

---

##### `aws_session_token`<sup>Optional</sup> <a name="aws_session_token" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.awsSessionToken"></a>

```python
aws_session_token: str
```

- *Type:* str

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `is_mongodbgov_cloud`<sup>Optional</sup> <a name="is_mongodbgov_cloud" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.isMongodbgovCloud"></a>

```python
is_mongodbgov_cloud: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `realm_base_url`<sup>Optional</sup> <a name="realm_base_url" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.realmBaseUrl"></a>

```python
realm_base_url: str
```

- *Type:* str

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `secret_name`<sup>Optional</sup> <a name="secret_name" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `sts_endpoint`<sup>Optional</sup> <a name="sts_endpoint" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.stsEndpoint"></a>

```python
sts_endpoint: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MongodbatlasProviderAssumeRole <a name="MongodbatlasProviderAssumeRole" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import provider

provider.MongodbatlasProviderAssumeRole(
  duration: str = None,
  external_id: str = None,
  policy: str = None,
  policy_arns: typing.List[str] = None,
  role_arn: str = None,
  session_name: str = None,
  source_identity: str = None,
  tags: typing.Mapping[str] = None,
  transitive_tag_keys: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.duration">duration</a></code> | <code>str</code> | The duration, between 15 minutes and 12 hours, of the role session. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.externalId">external_id</a></code> | <code>str</code> | A unique identifier that might be required when you assume a role in another account. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.policy">policy</a></code> | <code>str</code> | IAM Policy JSON describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.policyArns">policy_arns</a></code> | <code>typing.List[str]</code> | Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.roleArn">role_arn</a></code> | <code>str</code> | Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.sessionName">session_name</a></code> | <code>str</code> | An identifier for the assumed role session. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.sourceIdentity">source_identity</a></code> | <code>str</code> | Source identity specified by the principal assuming the role. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Assume role session tags. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.transitiveTagKeys">transitive_tag_keys</a></code> | <code>typing.List[str]</code> | Assume role session tag keys to pass to any subsequent sessions. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.duration"></a>

```python
duration: str
```

- *Type:* str

The duration, between 15 minutes and 12 hours, of the role session.

Valid time units are ns, us (or µs), ms, s, h, or m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#duration MongodbatlasProvider#duration}

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

A unique identifier that might be required when you assume a role in another account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#external_id MongodbatlasProvider#external_id}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.policy"></a>

```python
policy: str
```

- *Type:* str

IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#policy MongodbatlasProvider#policy}

---

##### `policy_arns`<sup>Optional</sup> <a name="policy_arns" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.policyArns"></a>

```python
policy_arns: typing.List[str]
```

- *Type:* typing.List[str]

Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#policy_arns MongodbatlasProvider#policy_arns}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#role_arn MongodbatlasProvider#role_arn}

---

##### `session_name`<sup>Optional</sup> <a name="session_name" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.sessionName"></a>

```python
session_name: str
```

- *Type:* str

An identifier for the assumed role session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#session_name MongodbatlasProvider#session_name}

---

##### `source_identity`<sup>Optional</sup> <a name="source_identity" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.sourceIdentity"></a>

```python
source_identity: str
```

- *Type:* str

Source identity specified by the principal assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#source_identity MongodbatlasProvider#source_identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Assume role session tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#tags MongodbatlasProvider#tags}

---

##### `transitive_tag_keys`<sup>Optional</sup> <a name="transitive_tag_keys" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole.property.transitiveTagKeys"></a>

```python
transitive_tag_keys: typing.List[str]
```

- *Type:* typing.List[str]

Assume role session tag keys to pass to any subsequent sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#transitive_tag_keys MongodbatlasProvider#transitive_tag_keys}

---

### MongodbatlasProviderConfig <a name="MongodbatlasProviderConfig" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import provider

provider.MongodbatlasProviderConfig(
  alias: str = None,
  assume_role: typing.Union[IResolvable, typing.List[MongodbatlasProviderAssumeRole]] = None,
  aws_access_key_id: str = None,
  aws_secret_access_key: str = None,
  aws_session_token: str = None,
  base_url: str = None,
  is_mongodbgov_cloud: typing.Union[bool, IResolvable] = None,
  private_key: str = None,
  public_key: str = None,
  realm_base_url: str = None,
  region: str = None,
  secret_name: str = None,
  sts_endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.assumeRole">assume_role</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole">MongodbatlasProviderAssumeRole</a>]]</code> | assume_role block. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsAccessKeyId">aws_access_key_id</a></code> | <code>str</code> | AWS API Access Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsSecretAccessKey">aws_secret_access_key</a></code> | <code>str</code> | AWS API Access Secret Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsSessionToken">aws_session_token</a></code> | <code>str</code> | AWS Security Token Service provided session token. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.baseUrl">base_url</a></code> | <code>str</code> | MongoDB Atlas Base URL. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.isMongodbgovCloud">is_mongodbgov_cloud</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | MongoDB Atlas Base URL default to gov. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.privateKey">private_key</a></code> | <code>str</code> | MongoDB Atlas Programmatic Private Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.publicKey">public_key</a></code> | <code>str</code> | MongoDB Atlas Programmatic Public Key. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.realmBaseUrl">realm_base_url</a></code> | <code>str</code> | MongoDB Realm Base URL. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.region">region</a></code> | <code>str</code> | Region where secret is stored as part of AWS Secret Manager. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.secretName">secret_name</a></code> | <code>str</code> | Name of secret stored in AWS Secret Manager. |
| <code><a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.stsEndpoint">sts_endpoint</a></code> | <code>str</code> | AWS Security Token Service endpoint. Required for cross-AWS region or cross-AWS account secrets. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#alias MongodbatlasProvider#alias}

---

##### `assume_role`<sup>Optional</sup> <a name="assume_role" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.assumeRole"></a>

```python
assume_role: typing.Union[IResolvable, typing.List[MongodbatlasProviderAssumeRole]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderAssumeRole">MongodbatlasProviderAssumeRole</a>]]

assume_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#assume_role MongodbatlasProvider#assume_role}

---

##### `aws_access_key_id`<sup>Optional</sup> <a name="aws_access_key_id" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsAccessKeyId"></a>

```python
aws_access_key_id: str
```

- *Type:* str

AWS API Access Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#aws_access_key_id MongodbatlasProvider#aws_access_key_id}

---

##### `aws_secret_access_key`<sup>Optional</sup> <a name="aws_secret_access_key" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsSecretAccessKey"></a>

```python
aws_secret_access_key: str
```

- *Type:* str

AWS API Access Secret Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#aws_secret_access_key MongodbatlasProvider#aws_secret_access_key}

---

##### `aws_session_token`<sup>Optional</sup> <a name="aws_session_token" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.awsSessionToken"></a>

```python
aws_session_token: str
```

- *Type:* str

AWS Security Token Service provided session token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#aws_session_token MongodbatlasProvider#aws_session_token}

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

MongoDB Atlas Base URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#base_url MongodbatlasProvider#base_url}

---

##### `is_mongodbgov_cloud`<sup>Optional</sup> <a name="is_mongodbgov_cloud" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.isMongodbgovCloud"></a>

```python
is_mongodbgov_cloud: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

MongoDB Atlas Base URL default to gov.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#is_mongodbgov_cloud MongodbatlasProvider#is_mongodbgov_cloud}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

MongoDB Atlas Programmatic Private Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#private_key MongodbatlasProvider#private_key}

---

##### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

MongoDB Atlas Programmatic Public Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#public_key MongodbatlasProvider#public_key}

---

##### `realm_base_url`<sup>Optional</sup> <a name="realm_base_url" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.realmBaseUrl"></a>

```python
realm_base_url: str
```

- *Type:* str

MongoDB Realm Base URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#realm_base_url MongodbatlasProvider#realm_base_url}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where secret is stored as part of AWS Secret Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#region MongodbatlasProvider#region}

---

##### `secret_name`<sup>Optional</sup> <a name="secret_name" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Name of secret stored in AWS Secret Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#secret_name MongodbatlasProvider#secret_name}

---

##### `sts_endpoint`<sup>Optional</sup> <a name="sts_endpoint" id="@cdktf/provider-mongodbatlas.provider.MongodbatlasProviderConfig.property.stsEndpoint"></a>

```python
sts_endpoint: str
```

- *Type:* str

AWS Security Token Service endpoint. Required for cross-AWS region or cross-AWS account secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs#sts_endpoint MongodbatlasProvider#sts_endpoint}

---



